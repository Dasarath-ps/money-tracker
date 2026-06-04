"use client";
import { useState } from "react";
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import AddButton from '@/app/components/AddButton';

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      
{/* TopAppBar (Mobile Only) */}
<header className="md:hidden fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 py-3 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-[0_4px_20px_rgba(224,64,160,0.1)]">
<button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-primary hover:bg-primary-container/20 active:scale-95 transition-all rounded-full mr-2"><span className="material-symbols-outlined text-3xl">menu</span></button>

{/* Menu Icon */}

{/* Brand */}
<div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic tracking-tight">Candy Cash</div>
{/* Search & Actions */}
<div className="flex items-center gap-3">
<button className="text-primary hover:scale-105 hover:bg-primary-container/20 transition-transform duration-200 active:scale-95 p-2 rounded-full">
<span className="material-symbols-outlined text-2xl">notifications</span>
</button>
<button className="text-primary hover:scale-105 hover:bg-primary-container/20 transition-transform duration-200 active:scale-95 p-2 rounded-full">
<span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
</button>
<div className="relative group flex-shrink-0">
    <button className="relative rounded-full overflow-hidden w-10 h-10 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-md block">
        <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1EihwFP8_o0a4_mlkfBpTLZVJ5ntnfE96wTRheAf8KdwxMPyuR24bdP8gOxgi4fyE46l9sCCKOF7QYlD7fDooxaSXUjeOf9VH1bWbYoCLWPZVsPmEqnBmC1JM43uF0mb5w6QypL-kfzSBdKziVbdbinbGozL_2pQYApk-1UONW25nA7rW2X11e9jGJrO5vEZPXrCXKSQaxyHOQTp2CMCqelK45pDFhyJWv-FoK5cF39noowUdNMTSHCgHRXBV5EW_DRoYUI4zBOM"/>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
            <span className="material-symbols-outlined text-white text-lg">edit</span>
        </div>
    </button>
    <div className="absolute top-full right-0 mt-3 w-48 bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgba(124,82,170,0.2)] border border-outline-variant/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible translate-y-[-10px] group-hover:translate-y-0 group-focus-within:translate-y-0 transition-all duration-300 ease-out z-50 flex flex-col overflow-hidden">
        <Link href="/settings" className="px-4 py-3 text-sm font-bold text-on-surface hover:bg-primary-container/20 hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">manage_accounts</span>
            Edit Profile
        </Link>
        <button className="px-4 py-3 text-sm font-bold text-error hover:bg-error-container/50 transition-colors flex items-center gap-2 text-left">
            <span className="material-symbols-outlined text-lg">logout</span>
            Sign Out
        </button>
    </div>
</div>
</div>
</header>
{/* SideNavBar (Web Only) */}
<aside className={`fixed left-0 top-0 h-screen w-72 flex-col p-6 z-50 bg-surface-container-low rounded-r-xl shadow-[8px_0_24px_rgba(124,82,170,0.15)] transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} flex`}>
{/* Header */}
<div className="flex items-center gap-4 mb-10">
<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_4px_12px_rgba(224,64,160,0.3)]">
<span className="material-symbols-outlined text-2xl" style={{"fontVariationSettings": "'FILL' 1"}}>cake</span>
</div>
<div>
<h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic tracking-tight">Candy Cash</h1>
<p className="text-sm text-secondary font-medium tracking-tight">Financial Joy</p>
</div>
</div>
{/* Navigation */}
<Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
{/* CTA */}
<div className="mt-auto"><AddButton /></div>
</aside>
{/* Main Content Canvas */}


{/* Desktop Floating Avatar */}
<div className="hidden md:flex fixed top-6 right-8 z-40 items-center gap-4">
    <button className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-primary-container/20 transition-all duration-200 shadow-sm bg-surface/50 backdrop-blur-md">
        <span className="material-symbols-outlined">notifications</span>
    </button>
    <div className="relative group flex-shrink-0">
    <button className="relative rounded-full overflow-hidden w-12 h-12 border-2 border-primary focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-md block">
        <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1EihwFP8_o0a4_mlkfBpTLZVJ5ntnfE96wTRheAf8KdwxMPyuR24bdP8gOxgi4fyE46l9sCCKOF7QYlD7fDooxaSXUjeOf9VH1bWbYoCLWPZVsPmEqnBmC1JM43uF0mb5w6QypL-kfzSBdKziVbdbinbGozL_2pQYApk-1UONW25nA7rW2X11e9jGJrO5vEZPXrCXKSQaxyHOQTp2CMCqelK45pDFhyJWv-FoK5cF39noowUdNMTSHCgHRXBV5EW_DRoYUI4zBOM"/>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
            <span className="material-symbols-outlined text-white text-lg">edit</span>
        </div>
    </button>
    <div className="absolute top-full right-0 mt-3 w-48 bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgba(124,82,170,0.2)] border border-outline-variant/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible translate-y-[-10px] group-hover:translate-y-0 group-focus-within:translate-y-0 transition-all duration-300 ease-out z-50 flex flex-col overflow-hidden">
        <Link href="/settings" className="px-4 py-3 text-sm font-bold text-on-surface hover:bg-primary-container/20 hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">manage_accounts</span>
            Edit Profile
        </Link>
        <button className="px-4 py-3 text-sm font-bold text-error hover:bg-error-container/50 transition-colors flex items-center gap-2 text-left">
            <span className="material-symbols-outlined text-lg">logout</span>
            Sign Out
        </button>
    </div>
</div>
</div>
<main className="flex-1 md:ml-72 pt-24 md:pt-10 px-6 pb-20 max-w-5xl mx-auto w-full">
{/* Header */}
<div className="mb-10">
<h1 className="text-4xl font-headline font-black text-primary mb-2">Settings</h1>
<p className="text-on-surface-variant font-medium text-lg">Tweak your Candy Cash experience.</p>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Profile Column (Left side on large screens) */}
<div className="lg:col-span-4 flex flex-col gap-8">
{/* Profile Card */}
<div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(124,82,170,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(124,82,170,0.1)] transition-all duration-300 ease-out border border-surface-variant flex flex-col items-center text-center">
<div className="relative group cursor-pointer mb-6">
<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-container shadow-[0_8px_20px_rgba(224,64,160,0.2)] group-hover:scale-105 transition-transform duration-300">
<img alt="Profile" className="w-full h-full object-cover" data-alt="A well-lit studio headshot of a smiling young woman, wearing bright vibrant clothing. The image embodies a joyful, playful aesthetic consistent with a vibrant app design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3_mb87dfu7_cjth2uYAGNi8uYidiUaTX1YbOjTZysB3sy_uRkVVZ8C8ICNH5v_WIIlZed4YCqJs_xySPuC945xYYdhgvhu89OLs5d38GZoGywklbKSyo9L213DPEA41BCiiVxKI5X23-piywV7lrsyDgJBGSTCYliPuG0hlAv6UdVNErFoUO5p-FJLeHdStQu36kry3JrAqiX8RYEevv_QToq-mqcAqP4SrEeWLLWoNjdM9Fk7RfiTSaNccFHiIxUJtVvw1zBvKA"/>
</div>
<div className="absolute bottom-0 right-0 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-surface-container-lowest group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-lg">edit</span>
</div>
</div>
<h2 className="text-2xl font-bold text-on-surface mb-1">Alex Joyfield</h2>
<p className="text-secondary font-medium mb-6">alex@candycash.app</p>
<button className="w-full bg-secondary-container text-on-secondary-container rounded-full py-3 px-6 font-bold hover:bg-secondary hover:text-on-secondary hover:shadow-[0_4px_16px_rgba(124,82,170,0.2)] hover:scale-[1.02] transition-all duration-300 active:scale-95">
                        Edit Profile
                    </button>
</div>
{/* Account Actions */}
<div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-[0_8px_30px_rgba(224,64,160,0.05)] border border-surface-variant">
<h3 className="text-lg font-bold text-primary mb-4 px-2">Account</h3>
<div className="flex flex-col gap-3">
<button className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-surface-container transition-colors group">
<div className="w-10 h-10 rounded-full bg-tertiary-container/30 text-tertiary flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">login</span>
</div>
<div className="text-left">
<div className="font-bold text-on-surface">Login Options</div>
<div className="text-sm text-on-surface-variant">Manage connections</div>
</div>
<span className="material-symbols-outlined ml-auto text-outline group-hover:text-tertiary transition-colors">chevron_right</span>
</button>
<button className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-error-container/50 transition-colors group">
<div className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">logout</span>
</div>
<div className="text-left">
<div className="font-bold text-error">Logout</div>
<div className="text-sm text-error/70">Sign out of this device</div>
</div>
</button>
</div>
</div>
</div>
{/* Settings Column (Right side on large screens) */}
<div className="lg:col-span-8 flex flex-col gap-8">
{/* General Settings */}
<div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(124,82,170,0.05)] border border-surface-variant relative overflow-hidden">
{/* Decorative blob */}
<div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-fixed opacity-50 rounded-full blur-3xl pointer-events-none"></div>
<h3 className="text-2xl font-bold text-secondary mb-6 relative z-10">General Settings</h3>
<div className="flex flex-col gap-2 relative z-10">
{/* Setting Item */}
<div className="flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center shadow-[0_4px_12px_rgba(224,64,160,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined">language</span>
</div>
<div>
<div className="font-bold text-on-surface text-lg">Language</div>
<div className="text-on-surface-variant">English (US)</div>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
</div>
{/* Setting Item */}
<div className="flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center shadow-[0_4px_12px_rgba(124,82,170,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<div className="font-bold text-on-surface text-lg">Default Currency</div>
<div className="text-on-surface-variant">USD ($)</div>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">chevron_right</span>
</div>
{/* Setting Item */}
<div className="flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center shadow-[0_4px_12px_rgba(0,150,204,0.1)] group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined">notifications_active</span>
</div>
<div>
<div className="font-bold text-on-surface text-lg">Push Notifications</div>
<div className="text-on-surface-variant">Daily summaries &amp; alerts</div>
</div>
</div>
{/* Custom Toggle */}
<div className="w-14 h-8 bg-primary rounded-full relative cursor-pointer shadow-inner transition-colors duration-300">
<div className="absolute right-1 top-1 w-6 h-6 bg-on-primary rounded-full shadow-md transform transition-transform duration-300"></div>
</div>
</div>
</div>
</div>
{/* Security Settings */}
<div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,150,204,0.05)] border border-surface-variant relative overflow-hidden">
<h3 className="text-2xl font-bold text-tertiary mb-6 relative z-10">Security</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
{/* Card Setting */}
<div className="p-6 rounded-2xl bg-surface-container border border-surface-variant hover:border-tertiary/30 hover:shadow-[0_8px_20px_rgba(0,150,204,0.08)] transition-all duration-300 cursor-pointer group flex flex-col gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-lowest text-tertiary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-tertiary group-hover:text-on-tertiary transition-all duration-300">
<span className="material-symbols-outlined">password</span>
</div>
<div>
<div className="font-bold text-on-surface text-lg mb-1">Change Password</div>
<div className="text-on-surface-variant text-sm leading-tight">Update your login credentials securely.</div>
</div>
</div>
{/* Card Setting */}
<div className="p-6 rounded-2xl bg-surface-container border border-surface-variant hover:border-primary/30 hover:shadow-[0_8px_20px_rgba(224,64,160,0.08)] transition-all duration-300 cursor-pointer group flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
<span className="material-symbols-outlined">fingerprint</span>
</div>
{/* Toggle off state */}
<div className="w-12 h-6 bg-surface-variant border border-outline-variant rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-4 h-4 bg-outline rounded-full transition-transform duration-300"></div>
</div>
</div>
<div>
<div className="font-bold text-on-surface text-lg mb-1">Biometric Login</div>
<div className="text-on-surface-variant text-sm leading-tight">Use Face ID or Fingerprint to unlock app.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
