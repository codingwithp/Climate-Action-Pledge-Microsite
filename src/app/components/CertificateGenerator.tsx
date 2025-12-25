"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Download, Heart } from "lucide-react";
import * as domtoimage from "dom-to-image-more";
import jsPDF from "jspdf";

export interface CertificateData {
  name: string;
  pledgeId: string;
  date: string;
  heartRating: number;
}

interface CertificateGeneratorProps {
  certificate: CertificateData | null;
  onClose: () => void;
}

export function CertificateGenerator({ certificate, onClose }: CertificateGeneratorProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  if (!certificate) return null;

  // State for dynamic pledge ID
  const [pledgeId, setPledgeId] = useState(certificate.pledgeId);

  // Generate a new unique pledge ID on mount
  useEffect(() => {
    const uniqueId = crypto?.randomUUID?.() || `pledge-${Date.now()}`;
    setPledgeId(uniqueId);
  }, []);

  const handleDownload = async () => {
    if (!certificateRef.current) return;

    const node = certificateRef.current;

    // Generate a new unique pledge ID for every download
    const uniquePledgeId = crypto?.randomUUID?.() || `pledge-${Date.now()}`;
    setPledgeId(uniquePledgeId); // Update state so UI shows the new ID

    const dataUrl = await domtoimage.toPng(node, {
      bgcolor: "#ffffff",
      width: node.scrollWidth,
      height: node.scrollHeight,
      style: {
        transform: "scale(1)",
        transformOrigin: "top left",
      },
    });

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [node.scrollWidth, node.scrollHeight],
    });

    pdf.addImage(dataUrl, "PNG", 0, 0, node.scrollWidth, node.scrollHeight);
    pdf.save(`${certificate.name}-certificate.pdf`);
  };

  return (
    <section className="py-16 px-4" style={{ background: "linear-gradient(to bottom, #ecfdf5, #ffffff)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            color: "rgb(4,120,87)",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Your Climate Action Certificate
        </h2>

        <div
          ref={certificateRef}
          style={{
            backgroundColor: "white",
            border: "10px solid rgb(16,185,129)",
            borderRadius: "20px",
            padding: "48px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          <div style={{ display: "inline-block", marginBottom: "16px" }}>
            <Heart style={{ width: "48px", height: "48px", color: "rgb(5,150,105)", outline: "none", border: "none" }} />
          </div>

          <h3
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "rgb(5,150,105)",
              marginBottom: "16px",
            }}
          >
            Certificate of Climate Action
          </h3>

          <p style={{ fontSize: "1.125rem", color: "rgb(75,85,99)", marginBottom: "16px" }}>
            This certifies that
          </p>

          <h2 style={{ fontSize: "2rem", fontWeight: 600, color: "rgb(4,120,87)", marginBottom: "32px" }}>
            {certificate.name}
          </h2>

          <p style={{ fontSize: "1.125rem", color: "rgb(75,85,99)", marginBottom: "16px" }}>
            has taken the Climate Action Pledge and is officially
          </p>

          <div
            style={{
              background: "linear-gradient(to right, rgb(16,185,129), rgb(20,184,166))",
              color: "white",
              padding: "16px 32px",
              borderRadius: "12px",
              display: "inline-block",
              fontWeight: 600,
              fontSize: "1.25rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              marginBottom: "32px",
            }}
          >
            Cool Enough to Care!
          </div>

          <p style={{ fontSize: "0.875rem", color: "rgb(107,114,128)", marginBottom: "8px" }}>
            Love for Planet Rating
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "32px" }}>
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                style={{
                  width: "24px",
                  height: "24px",
                  color: i < certificate.heartRating ? "rgb(239,68,68)" : "rgb(209,213,219)",
                  outline: "none",
                  border: "none",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "32px",
              borderTop: "1px solid rgb(209,213,219)",
              fontSize: "0.875rem",
              color: "rgb(107,114,128)",
            }}
          >
            <p>Pledge ID: {pledgeId}</p>
            <p>Date: {certificate.date}</p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "32px" }}>
          <Button onClick={handleDownload} style={{ backgroundColor: "rgb(5,150,105)", color: "white" }}>
            <Download style={{ width: "16px", height: "16px", marginRight: "8px" }} />
            Download Certificate
          </Button>
          <Button onClick={onClose} style={{ border: "1px solid rgb(75,85,99)", color: "rgb(75,85,99)" }}>
            Close
          </Button>
        </div>
      </div>
    </section>
  