'use client';

import signOut from '@/actions/(auth)/signout';
import React from 'react';

export default function YouAreNotAnAdmin() {
    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <button 
                className="m-auto w-fit rounded-sm bg-color1 px-4 py-3 text-lg font-semibold text-white shadow-lg transition-opacity hover:opacity-80"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}
