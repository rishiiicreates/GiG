// This file provides a centralized place to import and manage images

// Import custom project images
import timelessPorsche from "@assets/TimeLess.png";
import img0013 from "@assets/IMG_0013.jpeg";
import img0123 from "@assets/IMG_0123.jpeg";
import img0191 from "@assets/IMG_0191.jpeg";
import img0205 from "@assets/IMG_0205.jpeg";
import img0289 from "@assets/IMG_0289.jpeg";
import img0328 from "@assets/IMG_0328.jpeg";
import img0340 from "@assets/IMG_0340.jpeg";
import img0348 from "@assets/IMG_0348.jpeg";
import img0548 from "@assets/IMG_0548.jpeg";
import img0900 from "@assets/IMG_0900.jpeg";
import img0917 from "@assets/IMG_0917.jpeg";

// Professional designer workspace images
export function getWorkspaceImage(index: number = 1): string {
  const workspaceImages = [
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1531496681073-2047c8ec36ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];
  
  return workspaceImages[(index - 1) % workspaceImages.length];
}

// Professional designer images
export function getDesignerImage(index: number = 1): string {
  // Use the profile image
  return img0013;
}

// Web development process images
export function getProcessImage(index: number = 1): string {
  const processImages = [
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];
  
  return processImages[(index - 1) % processImages.length];
}

// Portfolio project images
export function getUIUXImages(): string[] {
  return [
    timelessPorsche,
    img0348,
    img0340,
    img0328,
    img0289,
    img0191,
    img0205,
    img0548,
    img0900,
    img0917
  ];
}
