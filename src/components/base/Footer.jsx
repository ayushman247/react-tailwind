import React from "react";
import { Link } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-900 text-white">
      <div className="flex justify-between">
        <div>
          <div>© 2025 QuickChat. All rights reserved.</div>
        </div>
        <div className="space-y-4">
          <Button>@Ayushman247</Button>
        </div>
      </div>
    </footer>
  );
}
