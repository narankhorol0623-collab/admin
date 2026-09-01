"use client";

import { useState } from "react";

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background relative overflow-hidden p-4 sm:p-6 w-full">
      {/* Background glow effects - mobile дээр хэмжээг нь багасгасан */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 sm:left-1/3 sm:translate-x-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-container/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/2 translate-x-1/2 sm:right-1/3 sm:translate-x-0 w-52 h-52 sm:w-80 sm:h-80 bg-secondary-container/10 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-sm sm:max-w-md p-5 sm:p-8 space-y-5 sm:space-y-6 bg-card rounded-xl border border-border/50 shadow-2xl backdrop-blur-sm relative z-10">
        <div className="text-center space-y-1.5 sm:space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            ГҮНД САПЛАЙ — ADMIN
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Админ системд нэвтрэхийн тулд мэдээллээ оруулна уу
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-medium text-foreground">
              И-мэйл
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gundsupply.mn"
              className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground text-xs sm:text-sm transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-medium text-foreground">
              Нууц үг
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground text-xs sm:text-sm transition-all"
            />
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
            <label className="flex items-center space-x-2 cursor-pointer text-muted-foreground select-none">
              <input
                type="checkbox"
                className="rounded border-border accent-primary"
              />
              <span className="text-xs sm:text-sm">Намайг санах</span>
            </label>
            <a
              href="#"
              className="text-primary hover:underline text-[11px] sm:text-xs shrink-0"
            >
              Нууц үг мартсан?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-primary text-black font-medium text-xs sm:text-sm rounded-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200"
          >
            Нэвтрэх
          </button>
        </form>
      </div>
    </div>
  );
}
