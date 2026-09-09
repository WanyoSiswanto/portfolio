"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface DataPrismCanvasProps {
  className?: string;
}

export default function DataPrismCanvas({ className = "" }: DataPrismCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the 3D sculpture
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Geometric Polyhedron (The Data Crystal)
    const coreGeometry = new THREE.IcosahedronGeometry(1.35, 0);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x182026,
      emissive: 0x071e16,
      roughness: 0.15,
      metalness: 0.88,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // 2. Outer Wireframe Cage (Precision Architecture)
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.65, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    mainGroup.add(wireframeMesh);

    // 3. Orbital Data Rings / Latitude Rings
    const ringGeometry = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.3,
      metalness: 0.9,
      emissive: 0x0c4a6e,
      emissiveIntensity: 0.4,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh1.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.y = Math.PI / 6;
    ringMesh2.scale.set(1.15, 1.15, 1.15);
    mainGroup.add(ringMesh2);

    // 4. Floating Data Nodes (Satellites)
    const nodeGroup = new THREE.Group();
    const nodeGeo = new THREE.OctahedronGeometry(0.08, 0);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });

    const nodeCount = 12;
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const theta = (i / nodeCount) * Math.PI * 2;
      const radius = 2.3 + Math.sin(i * 1.5) * 0.3;
      node.position.x = Math.cos(theta) * radius;
      node.position.y = Math.sin(theta * 1.2) * 0.7;
      node.position.z = Math.sin(theta) * radius;
      nodeGroup.add(node);
    }
    mainGroup.add(nodeGroup);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const emeraldLight = new THREE.DirectionalLight(0x10b981, 3.5);
    emeraldLight.position.set(-4, -2, -2);
    scene.add(emeraldLight);

    const cyanPoint = new THREE.PointLight(0x38bdf8, 2, 8);
    cyanPoint.position.set(0, 0, 0);
    scene.add(cyanPoint);

    // Mouse tracking with inertia interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.7;
      mouseY = y * 0.7;
    };

    window.addEventListener("pointermove", onPointerMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Intersection Observer to stop animation when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isVisibleRef.current) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia rotation following mouse
      targetRotY += (mouseX - targetRotY) * 0.04;
      targetRotX += (-mouseY - targetRotX) * 0.04;

      // Base idle continuous rotation
      mainGroup.rotation.y = targetRotY + elapsedTime * 0.15;
      mainGroup.rotation.x = targetRotX + Math.sin(elapsedTime * 0.3) * 0.08;

      // Counter rotation for inner core and outer cage
      coreMesh.rotation.y = -elapsedTime * 0.25;
      coreMesh.rotation.z = Math.cos(elapsedTime * 0.2) * 0.1;

      wireframeMesh.rotation.x = elapsedTime * 0.12;
      wireframeMesh.rotation.y = elapsedTime * 0.18;

      ringMesh1.rotation.z = elapsedTime * 0.2;
      ringMesh2.rotation.z = -elapsedTime * 0.25;

      nodeGroup.rotation.y = -elapsedTime * 0.35;

      // Gentle floating levitation
      mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries and materials to avoid memory leaks
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[360px] md:min-h-[480px] lg:min-h-[560px] cursor-grab active:cursor-grabbing select-none ${className}`}
      aria-label="Interactive 3D Data Sculpture"
    >
      {/* Decorative Spatial Corner Accents */}
      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-emerald-400/70 uppercase pointer-events-none flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        WebGL 3D Core Active
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-zinc-500 pointer-events-none">
        [ DRAG & MOVE POINTER ]
      </div>
    </div>
  );
}
