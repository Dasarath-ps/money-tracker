"use client";
import { useState } from "react";
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import AddButton from '@/app/components/AddButton';
export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      
{/* SideNavBar (Hidden on Mobile) */}
<Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
{/* TopAppBar (Mobile Only) */}
<header className="md:hidden fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 py-3 bg-surface/80 backdrop-blur-md shadow-[0_4px_20px_rgba(224,64,160,0.1)] font-body font-medium tracking-tight text-primary">
<button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-primary hover:bg-primary-container/20 active:scale-95 transition-all rounded-full mr-2"><span className="material-symbols-outlined text-3xl">menu</span></button>

<div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic tracking-tight">Candy Cash</div>
<div className="flex gap-4">
<span className="material-symbols-outlined hover:scale-105 hover:bg-primary-container/20 p-2 rounded-full transition-transform duration-200 active:scale-95 cursor-pointer" data-icon="search">search</span>
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
<main className="flex-1 md:ml-72 pt-20 md:pt-8 p-6 lg:p-10 max-w-7xl mx-auto w-full pb-24">
{/* Header & Search Bento Box */}
<div className="bg-surface-container-high rounded-xl p-6 lg:p-8 mb-8 pink-shadow bouncy-hover relative overflow-hidden group">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-fixed rounded-full mix-blend-multiply opacity-50 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-fixed rounded-full mix-blend-multiply opacity-50 blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-6 items-center justify-between">
<div>
<h2 className="text-3xl font-bold font-headline text-on-surface mb-2">My Transactions</h2>
<p className="text-on-surface-variant">Track your joyful spending and sweet earnings.</p>
</div>
<div className="w-full md:w-96 relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary" data-icon="search">search</span>
<input className="w-full bg-surface-bright border-none rounded-full py-4 pl-12 pr-6 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-4 focus:ring-primary-container pink-shadow transition-all text-lg font-medium" placeholder="Search sweets, coffee, bills..." type="text"/>
</div>
</div>
</div>
{/* Filters & Sort */}
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
<div className="flex gap-3">
<button className="px-5 py-2.5 bg-primary text-on-primary font-bold rounded-full pink-shadow bouncy-hover active:scale-95 transition-all text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="check">check</span> All
                </button>
<button className="px-5 py-2.5 bg-surface-bright text-on-surface font-semibold rounded-full hover:bg-error-container hover:text-error pink-shadow bouncy-hover active:scale-95 transition-all text-sm border border-outline-variant">Expenses</button>
<button className="px-5 py-2.5 bg-surface-bright text-on-surface font-semibold rounded-full hover:bg-tertiary-container hover:text-on-tertiary-container pink-shadow bouncy-hover active:scale-95 transition-all text-sm border border-outline-variant">Income</button>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-surface-container text-on-surface font-medium rounded-full hover:bg-surface-dim transition-colors flex items-center gap-2 text-sm border border-outline-variant">
<span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span> This Month
                </button>
<button className="px-4 py-2 bg-surface-container text-on-surface font-medium rounded-full hover:bg-surface-dim transition-colors flex items-center gap-2 text-sm border border-outline-variant">
<span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span> Filter
                </button>
</div>
</div>
{/* Transactions List (Pill-shaped rows) */}
<div className="space-y-4">
{/* Row 1: Expense */}
<div className="bg-surface-bright rounded-full p-4 pr-6 flex items-center gap-4 hover:bg-surface-container-lowest pink-shadow bouncy-hover cursor-pointer border border-transparent hover:border-primary-fixed-dim transition-all">
<div className="w-12 h-12 rounded-full bg-[#ffe8e8] text-error flex items-center justify-center shrink-0">
<span className="material-symbols-outlined" data-icon="restaurant">restaurant</span>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
<div>
<p className="font-bold text-on-surface text-lg truncate">Sweet Tooth Bakery</p>
<p className="text-xs text-on-surface-variant font-medium md:hidden">Food &amp; Drink • Oct 24</p>
</div>
<div className="hidden md:block">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">
                            Food &amp; Drink
                        </span>
</div>
<div className="hidden md:block text-sm font-medium text-on-surface-variant text-right">
                        Oct 24, 2023
                    </div>
<div className="text-right">
<p className="font-bold text-error text-xl">-$24.50</p>
</div>
</div>
</div>
{/* Row 2: Income */}
<div className="bg-surface-bright rounded-full p-4 pr-6 flex items-center gap-4 hover:bg-surface-container-lowest pink-shadow bouncy-hover cursor-pointer border border-transparent hover:border-primary-fixed-dim transition-all">
<div className="w-12 h-12 rounded-full bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center shrink-0">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
<div>
<p className="font-bold text-on-surface text-lg truncate">Freelance Project</p>
<p className="text-xs text-on-surface-variant font-medium md:hidden">Income • Oct 23</p>
</div>
<div className="hidden md:block">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">
                            Income
                        </span>
</div>
<div className="hidden md:block text-sm font-medium text-on-surface-variant text-right">
                        Oct 23, 2023
                    </div>
<div className="text-right">
<p className="font-bold text-[#2e7d32] text-xl">+$850.00</p>
</div>
</div>
</div>
{/* Row 3: Expense */}
<div className="bg-surface-bright rounded-full p-4 pr-6 flex items-center gap-4 hover:bg-surface-container-lowest pink-shadow bouncy-hover cursor-pointer border border-transparent hover:border-primary-fixed-dim transition-all">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
<div>
<p className="font-bold text-on-surface text-lg truncate">Zara</p>
<p className="text-xs text-on-surface-variant font-medium md:hidden">Shopping • Oct 21</p>
</div>
<div className="hidden md:block">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">
                            Shopping
                        </span>
</div>
<div className="hidden md:block text-sm font-medium text-on-surface-variant text-right">
                        Oct 21, 2023
                    </div>
<div className="text-right">
<p className="font-bold text-error text-xl">-$120.00</p>
</div>
</div>
</div>
{/* Row 4: Expense */}
<div className="bg-surface-bright rounded-full p-4 pr-6 flex items-center gap-4 hover:bg-surface-container-lowest pink-shadow bouncy-hover cursor-pointer border border-transparent hover:border-primary-fixed-dim transition-all">
<div className="w-12 h-12 rounded-full bg-[#fff3e0] text-[#e65100] flex items-center justify-center shrink-0">
<span className="material-symbols-outlined" data-icon="directions_car">directions_car</span>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
<div>
<p className="font-bold text-on-surface text-lg truncate">Uber Ride</p>
<p className="text-xs text-on-surface-variant font-medium md:hidden">Transport • Oct 20</p>
</div>
<div className="hidden md:block">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">
                            Transport
                        </span>
</div>
<div className="hidden md:block text-sm font-medium text-on-surface-variant text-right">
                        Oct 20, 2023
                    </div>
<div className="text-right">
<p className="font-bold text-error text-xl">-$18.25</p>
</div>
</div>
</div>
</div>
</main>
{/* Floating Action Button */}


    </>
  );
}
