"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, Link2, X, ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface FotoUploadProps {
  value?: string;
  onChange: (url: string) => void;
}

export default function FotoUpload({ value, onChange }: FotoUploadProps) {
  const [uploadMode, setUploadMode] = useState<"file" | "url">("file");
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize preview if value is provided
  useEffect(() => {
    if (value) {
      setPreview(value);
      if (value.startsWith("http")) {
        setUploadMode("url");
        setUrlInput(value);
      } else {
        setUploadMode("file");
      }
    } else {
      setPreview(null);
      setUrlInput("");
    }
  }, [value]);

  const handleFile = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Ukuran file maksimal 5MB");
      return;
    }
    if (!file.type.startsWith("image/")) {
      toast.error("Format file harus berupa gambar");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setPreview(base64String);
      onChange(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const isValidUrl = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleRemove = () => {
    setPreview(null);
    setUrlInput("");
    onChange("");
  };

  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] block mb-2">
        Foto Referensi Peralatan
      </label>

      {/* Mode toggle */}
      <div className="flex gap-1 p-1 bg-[#F3F4F6] rounded-xl mb-3 w-fit">
        {[
          { key: "file", label: "Upload File", icon: <Upload size={13} /> },
          { key: "url",  label: "URL Gambar",  icon: <Link2  size={13} /> },
        ].map(mode => (
          <button
            type="button"
            key={mode.key}
            onClick={() => { 
              setUploadMode(mode.key as "file"|"url"); 
              handleRemove();
            }}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
              uploadMode === mode.key
                ? "bg-white text-[#111827] shadow-sm"
                : "text-[#6B7280] hover:text-[#374151]"
            )}
          >
            {mode.icon}
            {mode.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {uploadMode === "file" ? (
          <motion.div
            key="file"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
          >
            {/* Drop zone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragOver(true);  }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={cn(
                "border-2 border-dashed rounded-2xl cursor-pointer transition-all overflow-hidden bg-[#F9FAFB]",
                dragOver ? "border-[#DC2626] bg-[#FEF2F2]" : "border-[#E5E7EB] hover:border-[#DC2626]/50"
              )}
            >
              <input 
                ref={fileInputRef} 
                type="file" 
                accept="image/*" 
                className="hidden"
                onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }} 
              />

              {preview ? (
                <div className="relative h-40 w-full group">
                  <img src={preview} className="w-full h-full object-cover" alt="Preview" />
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); handleRemove(); }}
                    className="absolute top-2 right-2 bg-black/50 text-white rounded-full
                               w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 gap-2">
                  <div className="w-10 h-10 bg-[#FEF2F2] rounded-xl flex items-center justify-center">
                    <ImagePlus size={20} className="text-[#DC2626]" />
                  </div>
                  <p className="text-sm text-[#374151] font-medium">Klik atau drag & drop</p>
                  <p className="text-xs text-[#9CA3AF]">PNG, JPG, WebP • Maks. 5MB</p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="url"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="space-y-3"
          >
            <div className="relative">
              <input
                type="url"
                placeholder="https://example.com/gambar.jpg"
                value={urlInput}
                onChange={e => {
                  setUrlInput(e.target.value);
                  if (isValidUrl(e.target.value)) {
                    setPreview(e.target.value);
                    onChange(e.target.value);
                  } else {
                    setPreview(null);
                  }
                }}
                className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2.5 text-sm bg-[#F9FAFB]
                           focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]/60 focus:outline-none"
              />
              {preview && (
                <button
                  type="button"
                  onClick={handleRemove}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#DC2626] cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {preview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="rounded-xl overflow-hidden border border-[#E5E7EB] h-32"
              >
                <img 
                  src={preview} 
                  className="w-full h-full object-cover" 
                  alt="Preview URL"
                  onError={() => {
                    setPreview(null);
                  }} 
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
