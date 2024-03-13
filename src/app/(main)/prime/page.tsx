"use client";
import { useState } from "react";
import { monserrat } from "@/config/fonts";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function AdminPage() {
  const [visible, setVisible] = useState(false);
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <h1 className={`${monserrat.className} font-bold`}>PrimeReact Page</h1>
      <Button label="Small" icon="pi pi-check" size="small" />
      <Button label="Normal" icon="pi pi-check" />
      <Button label="Large" icon="pi pi-check" size="large" />

      <div className="card flex justify-content-center">
        <Button
          label="Show"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
        <Dialog
          header="Header"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
      </div>
    </main>
  );
}
