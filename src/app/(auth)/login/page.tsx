"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight, Info } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(1, "Kata sandi wajib diisi"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    const toastId = toast.loading("Mengecek kredensial...");
    
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      toast.dismiss(toastId);

      if (res?.error) {
        toast.error("Email atau kata sandi salah. Silakan coba lagi.");
      } else {
        toast.success("Berhasil masuk! Selamat datang kembali.");
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      toast.dismiss(toastId);
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-4">
      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl shadow-xl p-8 transition-all">
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#DC2626] flex items-center justify-center mb-3">
            <Zap size={24} className="text-white fill-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#111827]">InspecPro Admin</h2>
          <p className="text-sm text-[#6B7280] mt-1">Masuk untuk mengelola data inspeksi</p>
        </div>

        {/* Demo Credentials Box */}
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-4 mb-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 bg-[#DC2626] rounded-full flex items-center justify-center">
              <Info size={11} className="text-white" />
            </div>
            <p className="text-xs font-bold text-[#DC2626] uppercase tracking-wide">
              Demo Credentials
            </p>
          </div>
          <div className="space-y-2">
            {[
              { role: "Admin", email: "admin@inspecpro.com", password: "Admin@123" },
              { role: "Manager", email: "manager@inspecpro.com", password: "Manager@123" },
              { role: "Teknisi", email: "bambang@inspecpro.com", password: "Teknisi@123" },
            ].map((cred) => (
              <button
                key={cred.role}
                type="button"
                onClick={() => {
                  setValue("email", cred.email);
                  setValue("password", cred.password);
                }}
                className="w-full flex items-center justify-between text-left bg-white/60 hover:bg-white rounded-xl px-3 py-2.5 transition-colors group"
              >
                <div>
                  <span className="text-xs font-bold text-[#DC2626]">{cred.role}</span>
                  <p className="text-xs text-[#374151] mt-0.5 font-mono">{cred.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#9CA3AF] font-mono">{cred.password}</span>
                  <ArrowRight size={12} className="text-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
          <p className="text-[10px] text-[#9CA3AF] mt-2.5 text-center">
            Klik baris untuk mengisi form login secara otomatis
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
              Alamat Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#6B7280]">
                <Mail size={18} strokeWidth={1.5} />
              </span>
              <input
                {...register("email")}
                type="email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB] placeholder:text-neutral-400"
                placeholder="nama@perusahaan.com"
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-[#DC2626] mt-1.5">{errors.email.message}</p>
            )}
          </div>

          {/* Password input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                Kata Sandi
              </label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#6B7280]">
                <Lock size={18} strokeWidth={1.5} />
              </span>
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB] placeholder:text-neutral-400"
                placeholder="••••••••"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#6B7280] hover:text-[#111827] transition-colors"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-[#DC2626] mt-1.5">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl font-semibold text-sm transition-all focus:outline-none focus:ring-4 focus:ring-[#DC2626]/20 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 shadow-sm"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Memproses...
              </>
            ) : (
              "Masuk ke Dashboard"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
