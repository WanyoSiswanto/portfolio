"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Monolith3DCanvasProps {
  className?: string;
}

export default function Monolith3DCanvas({ className = "" }: Monolith3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Group for the Monolith assembly
    const assemblyGroup = new THREE.Group();
    scene.add(assemblyGroup);

    // 1. The Heavy Titanium Monolith Slab
    // Dimensions: 1.4 width, 2.3 height, 0.45 depth
    const slabGeometry = new THREE.BoxGeometry(1.4, 2.2, 0.45);
    const slabMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x11141a,
      roughness: 0.18,
      metalness: 0.94,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
      flatShading: false,
    });
    const slabMesh = new THREE.Mesh(slabGeometry, slabMaterial);
    assemblyGroup.add(slabMesh);

    // 2. Beveled Inner Screen / Sensor Panel (Recessed)
    const panelGeo = new THREE.PlaneGeometry(1.15, 1.85);
    const panelMat = new THREE.MeshStandardMaterial({
      color: 0x05070a,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x03141f,
      emissiveIntensity: 0.5,
    });
    const panelMesh = new THREE.Mesh(panelGeo, panelMat);
    panelMesh.position.z = 0.23;
    assemblyGroup.add(panelMesh);

    // 3. Cyber-Physical Telemetry Grid Overlay (Wireframe HUD on Screen)
    const gridHelper = new THREE.GridHelper(1.8, 12, 0x06b6d4, 0x1e293b);
    gridHelper.rotation.x = Math.PI / 2;
    gridHelper.position.z = 0.235;
    assemblyGroup.add(gridHelper);

    // 4. Tactical Status Indicator Bar (Phosphor Amber / Cyan LED)
    const ledGeo = new THREE.BoxGeometry(0.9, 0.04, 0.02);
    const ledMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 1.8,
      roughness: 0.1,
    });
    const ledMeshTop = new THREE.Mesh(ledGeo, ledMat);
    ledMeshTop.position.set(0, 0.85, 0.24);
    assemblyGroup.add(ledMeshTop);

    // 5. Outer Wireframe Telemetry Cage
    const cageGeo = new THREE.BoxGeometry(1.65, 2.45, 0.65);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    assemblyGroup.add(cageMesh);

    // 6. Orbital Laser Ring (Cyber-Physical Scanning)
    const ringGeo = new THREE.TorusGeometry(1.85, 0.012, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.9,
    });
    const scanRing = new THREE.Mesh(ringGeo, ringMat);
    scanRing.rotation.x = Math.PI / 3;
    assemblyGroup.add(scanRing);

    // Lighting (Tactile Studio Lab)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const rimCyanLight = new THREE.DirectionalLight(0x06b6d4, 4.0);
    rimCyanLight.position.set(-5, -2, -3);
    scene.add(rimCyanLight);

    const amberPoint = new THREE.PointLight(0xf59e0b, 2.5, 6);
    amberPoint.position.set(2, -2, 2);
    scene.add(amberPoint);

    // Mouse tracking with inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.85;
      mouseY = y * 0.85;
    };

    window.addEventListener("pointermove", onPointerMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isVisibleRef.current) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia following mouse
      targetRotY += (mouseX - targetRotY) * 0.05;
      targetRotX += (-mouseY - targetRotX) * 0.05;

      // Base idle + mouse rotation
      assemblyGroup.rotation.y = targetRotY + Math.sin(elapsedTime * 0.4) * 0.15;
      assemblyGroup.rotation.x = targetRotX + Math.cos(elapsedTime * 0.3) * 0.08;

      // Subtle mechanical breathing & floating
      assemblyGroup.position.y = Math.sin(elapsedTime * 0.7) * 0.06;

      // Rotate laser ring & cage
      scanRing.rotation.z = elapsedTime * 0.4;
      cageMesh.rotation.y = -elapsedTime * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      slabGeometry.dispose();
      slabMaterial.dispose();
      panelGeo.dispose();
      panelMat.dispose();
      gridHelper.dispose();
      ledGeo.dispose();
      ledMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[360px] md:min-h-[460px] cursor-grab active:cursor-grabbing select-none ${className}`}
      aria-label="3D Cyber-Physical Monolith Hardware Console"
    >
      <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-cyan-400/80 uppercase pointer-events-none flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        MONOLITH 3D // PRECISION CHASSIS
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] tracking-widest text-zinc-500 pointer-events-none">
        [ DRAG TO ROTATE 3D ]
      </div>
    </div>
  );
}
