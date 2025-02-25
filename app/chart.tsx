"use client"; // ✅ Required for Recharts in Next.js (Prevents Server Component Errors)

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 600 },
];

export default function Chart() {
  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Monthly Performance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#9B7CB6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
