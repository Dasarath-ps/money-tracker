"use client";
import { useState } from "react";
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import AddButton from '@/app/components/AddButton';
export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      
{/* JSON Component: SideNavBar (Desktop) */}
<Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
{/* JSON Component: TopAppBar (Mobile) */}
<header className="md:hidden fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 py-4 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-[0_4px_20px_rgba(224,64,160,0.1)]">
<button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-primary hover:bg-primary-container/20 active:scale-95 transition-all rounded-full mr-2"><span className="material-symbols-outlined text-3xl">menu</span></button>

<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 1"}}>auto_awesome</span>
</div>
<h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic tracking-tight">Candy Cash</h1>
</div>
<div className="flex items-center gap-4 text-primary">
<button className="hover:scale-105 hover:bg-primary-container/20 transition-transform duration-200 p-2 rounded-full active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="hover:scale-105 hover:bg-primary-container/20 transition-transform duration-200 p-2 rounded-full active:scale-95 mr-2">
<span className="material-symbols-outlined">account_balance_wallet</span>
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
{/* Main Content Area (Candy Brain Canvas) */}


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
<main className="flex-1 h-full flex flex-col md:ml-72 pt-20 md:pt-0 relative bg-surface-bright">
{/* Chat History Area */}
<div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-6 max-w-4xl mx-auto w-full pb-40">
{/* Greeting / Welcome */}
<div className="text-center my-6">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-fixed shadow-pink-glow mb-4">
<span className="material-symbols-outlined text-4xl text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>psychiatry</span>
</div>
<h2 className="text-3xl font-black text-on-background tracking-tight mb-2">Hi, I'm Candy Brain!</h2>
<p className="text-on-surface-variant font-medium">Your joyful AI financial assistant. What shall we explore today?</p>
</div>
{/* User Message */}
<div className="self-end max-w-[85%] md:max-w-[70%]">
<div className="bg-primary text-on-primary px-6 py-4 rounded-xl rounded-tr-sm shadow-pink-glow bouncy-hover text-lg font-medium">
                    Can you give me a breakdown of my current finances? Main expense and income?
                </div>
</div>
{/* AI Response (Bento Grid Layout) */}
<div className="self-start w-full max-w-[95%] md:max-w-[85%] mt-2">
<div className="flex items-start gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-sm" style={{"fontVariationSettings": "'FILL' 1"}}>auto_awesome</span>
</div>
<span className="text-sm font-bold text-on-surface-variant pt-1">Candy Brain Analysis</span>
</div>
<div className="glass-panel rounded-xl p-6 shadow-purple-glow">
<p className="text-lg text-on-background font-medium mb-6">Here’s your financial joy-check! You’re doing great, but a lot of candy money is going towards food. 🍔</p>
{/* Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/* Main Metric (Annual Estimate) */}
<div className="col-span-1 md:col-span-2 bg-surface rounded-xl p-6 shadow-sm border border-surface-variant relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed-dim rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
<div className="flex justify-between items-center mb-2">
<h3 className="font-bold text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary">calendar_month</span>
                                    Annual Expense Estimate
                                </h3>
<span className="bg-tertiary-fixed text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">On Track</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-black text-on-background tracking-tighter">$42,500</span>
<span className="text-lg font-bold text-outline">.00</span>
</div>
{/* Progress Bar */}
<div className="mt-4">
<div className="flex justify-between text-xs font-bold text-on-surface-variant mb-1">
<span>Current Progress</span>
<span>65%</span>
</div>
<div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-tertiary rounded-full w-[65%] shadow-[0_0_10px_rgba(0,150,204,0.5)]"></div>
</div>
</div>
</div>
{/* Top Expense */}
<div className="bg-surface rounded-xl p-5 shadow-sm border border-surface-variant bouncy-hover">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center">
<span className="material-symbols-outlined">restaurant</span>
</div>
<span className="text-xs font-bold text-on-surface-variant uppercase">Main Expense</span>
</div>
<h4 className="text-2xl font-black text-on-background mb-1">Food &amp; Dining</h4>
<p className="text-3xl font-black text-error tracking-tight">-$1,240<span className="text-sm text-outline font-medium">/mo</span></p>
</div>
{/* Top Income */}
<div className="bg-surface rounded-xl p-5 shadow-sm border border-surface-variant bouncy-hover">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
<span className="material-symbols-outlined">payments</span>
</div>
<span className="text-xs font-bold text-on-surface-variant uppercase">Top Income</span>
</div>
<h4 className="text-2xl font-black text-on-background mb-1">Salary</h4>
<p className="text-3xl font-black text-secondary tracking-tight">+$5,800<span className="text-sm text-outline font-medium">/mo</span></p>
</div>
</div>
</div>
</div>
</div>
{/* Fixed Bottom Interaction Area */}
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-surface-bright via-surface-bright to-transparent pt-12 pb-6 px-4 md:px-8 z-20">
<div className="max-w-4xl mx-auto">
{/* Magic Prompts */}
<div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
<button className="shrink-0 bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed font-bold px-5 py-3 rounded-full text-sm shadow-sm transition-colors bouncy-active border border-primary-fixed-dim">
                        What's my annual expense estimate?
                    </button>
<button className="shrink-0 bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-bold px-5 py-3 rounded-full text-sm shadow-sm transition-colors bouncy-active border border-secondary-fixed-dim">
                        Main expense source this month?
                    </button>
<button className="shrink-0 bg-tertiary-fixed hover:bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold px-5 py-3 rounded-full text-sm shadow-sm transition-colors bouncy-active border border-tertiary-fixed-dim">
                        Top income source?
                    </button>
</div>
{/* Chat Input */}
<div className="bg-surface rounded-full shadow-purple-glow p-2 flex items-center border border-surface-variant/50 focus-within:border-primary transition-colors focus-within:ring-4 focus-within:ring-primary-fixed">
<button className="p-3 text-on-surface-variant hover:text-primary transition-colors rounded-full">
<span className="material-symbols-outlined">add_circle</span>
</button>
<input className="flex-1 bg-transparent border-none focus:ring-0 text-on-background font-medium placeholder:text-outline px-2 text-lg" placeholder="Ask Candy Brain anything..." type="text"/>
<button className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-pink-glow bouncy-hover bouncy-active ml-2">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>send</span>
</button>
</div>
<p className="text-center text-xs text-outline font-medium mt-3">Candy Brain can make mistakes. Always check your actual receipts for pure joy.</p>
</div>
</div>
</main>

    </>
  );
}
