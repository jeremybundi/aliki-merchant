"use client";
import React, { useState } from "react";
import TransactionsList from "./TransactionsList"; // Image 1
import TransactionFullDetail from "./TransactionFullDetail"; // Image 2

export default function TransactionsPage() {
  const [viewingId, setViewingId] = useState<string | null>(null);

  if (viewingId) {
    return (
      <div className="p-8">
        <TransactionFullDetail id={viewingId} onBack={() => setViewingId(null)} />
      </div>
    );
  }

  return (
    <div className="p-8">
      <TransactionsList onViewDetails={(id) => setViewingId(id)} />
    </div>
  );
}