"use client";
import { useState } from "react";
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import AddButton from '@/app/components/AddButton';

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      
{/* SideNavBar */}
<Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
{/* Mobile Top Header (Fallback) */}
<header className="md:hidden fixed top-0 left-0 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between p-4 z-40 shadow-sm">
<button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-primary hover:bg-primary-container/20 active:scale-95 transition-all rounded-full mr-2"><span className="material-symbols-outlined text-3xl">menu</span></button>

<div className="flex items-center gap-2">
<span className="material-symbols-outlined fill text-primary">account_balance_wallet</span>
<span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic tracking-tight">Candy Cash</span>
</div>
<button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface bouncy-hover">
<span className="material-symbols-outlined">close</span>
</button>
</header>
{/* Main Content Area */}


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
<main className="flex-1 md:ml-72 pt-20 md:pt-10 px-4 md:px-12 pb-24 max-w-5xl mx-auto w-full">
{/* Header */}
<div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<button className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-4 text-sm font-medium">
<span className="material-symbols-outlined text-lg">arrow_back</span>
                    Back to Transactions
                </button>
<h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">New Transaction</h2>
</div>
{/* Type Toggle */}
<div className="flex bg-surface-container-high rounded-full p-1 shadow-inner relative">
<div className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full shadow-[0_2px_8px_rgba(224,64,160,0.3)] transition-transform duration-300 ease-out z-0" id="toggle-indicator"></div>
<button className="flex-1 py-2 px-6 rounded-full text-center font-bold text-sm z-10 transition-colors text-on-primary" id="btn-expense">
                    Expense
                </button>
<button className="flex-1 py-2 px-6 rounded-full text-center font-bold text-sm z-10 transition-colors text-on-surface-variant hover:text-secondary" id="btn-income">
                    Income
                </button>
</div>
</div>
{/* Form Area (Bento Grid Style) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/* Left Column: Amount & Basics */}
<div className="lg:col-span-7 space-y-6">
{/* Amount Card */}
<div className="bg-surface rounded-2xl p-8 shadow-[0_8px_24px_rgba(124,82,170,0.08)] bouncy-hover hover:shadow-[0_12px_32px_rgba(124,82,170,0.12)]">
<label className="block text-sm font-bold text-on-surface-variant mb-4 uppercase tracking-wider">Amount</label>
<div className="flex items-center gap-2 border-b-2 border-outline-variant focus-within:border-primary pb-2 transition-colors">
<span className="text-4xl font-bold text-on-surface-variant">$</span>
<input autoFocus className="w-full text-5xl md:text-6xl font-black text-on-surface bg-transparent border-none focus:ring-0 p-0 placeholder-outline-variant/50" placeholder="0.00" type="number"/>
</div>
</div>
{/* Details Card */}
<div className="bg-surface rounded-2xl p-6 shadow-[0_8px_24px_rgba(124,82,170,0.08)] flex flex-col gap-6">
{/* Date */}
<div>
<label className="block text-sm font-bold text-on-surface-variant mb-2">Date</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">calendar_today</span>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-full py-3 pl-12 pr-4 text-on-surface font-medium focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all" type="date"/>
</div>
</div>
{/* Note */}
<div>
<label className="block text-sm font-bold text-on-surface-variant mb-2">Note</label>
<textarea className="w-full bg-surface-container-low border border-outline-variant rounded-2xl py-3 px-4 text-on-surface font-medium focus:ring-2 focus:ring-primary-fixed focus:border-primary transition-all resize-none" placeholder="What was this for?" rows={3}></textarea>
</div>
</div>
</div>
{/* Right Column: Category & Actions */}
<div className="lg:col-span-5 space-y-6">
{/* Category Selection Card */}
<div className="bg-surface rounded-2xl p-6 shadow-[0_8px_24px_rgba(124,82,170,0.08)] flex flex-col h-full">
<div className="flex justify-between items-center mb-4">
<label className="block text-sm font-bold text-on-surface-variant">Category</label>
<button className="text-tertiary text-sm font-bold flex items-center gap-1 hover:text-tertiary-container transition-colors">
<span className="material-symbols-outlined text-sm">add</span> New
                        </button>
</div>
<div className="grid grid-cols-3 gap-3 overflow-y-auto pr-2 pb-2" style={{"maxHeight": "300px"}}>
{/* Category Item 1 (Active) */}
<button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-secondary-container text-secondary border-2 border-secondary shadow-[0_4px_12px_rgba(124,82,170,0.2)] bouncy-hover bouncy-active transition-all">
<div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center mb-2">
<span className="material-symbols-outlined fill">restaurant</span>
</div>
<span className="text-xs font-bold text-center leading-tight">Food &amp; Dining</span>
</button>
{/* Category Items */}
<button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-low text-on-surface-variant border-2 border-transparent hover:bg-surface-container hover:text-on-surface bouncy-hover bouncy-active transition-all">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center mb-2">
<span className="material-symbols-outlined">shopping_bag</span>
</div>
<span className="text-xs font-medium text-center leading-tight">Shopping</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-low text-on-surface-variant border-2 border-transparent hover:bg-surface-container hover:text-on-surface bouncy-hover bouncy-active transition-all">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center mb-2">
<span className="material-symbols-outlined">directions_car</span>
</div>
<span className="text-xs font-medium text-center leading-tight">Transport</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-low text-on-surface-variant border-2 border-transparent hover:bg-surface-container hover:text-on-surface bouncy-hover bouncy-active transition-all">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center mb-2">
<span className="material-symbols-outlined">home</span>
</div>
<span className="text-xs font-medium text-center leading-tight">Housing</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-low text-on-surface-variant border-2 border-transparent hover:bg-surface-container hover:text-on-surface bouncy-hover bouncy-active transition-all">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center mb-2">
<span className="material-symbols-outlined">movie</span>
</div>
<span className="text-xs font-medium text-center leading-tight">Entertainment</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-low text-on-surface-variant border-2 border-transparent hover:bg-surface-container hover:text-on-surface bouncy-hover bouncy-active transition-all">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center mb-2">
<span className="material-symbols-outlined">favorite</span>
</div>
<span className="text-xs font-medium text-center leading-tight">Health</span>
</button>
</div>
</div>
{/* Action Button */}
<button className="w-full py-4 bg-primary text-on-primary rounded-full shadow-[0_8px_24px_rgba(224,64,160,0.4)] text-lg font-bold flex items-center justify-center gap-2 bouncy-hover bouncy-active hover:shadow-[0_12px_32px_rgba(224,64,160,0.5)]">
<span className="material-symbols-outlined">check_circle</span>
                    Save Transaction
                </button>
<div className="text-center mt-4">
<button className="text-sm font-medium text-on-surface-variant hover:text-error transition-colors">Cancel</button>
</div>
</div>
</div>
</main>

    </>
  );
}
