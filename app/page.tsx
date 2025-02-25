"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock Data
const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 600 },
];

const recentActivity = [
  { id: 1, user: "John Doe", action: "Created project", date: "2023-11-20", status: "success" },
  { id: 2, user: "Jane Smith", action: "Updated settings", date: "2023-11-19", status: "processing" },
  { id: 3, user: "Alice Johnson", action: "Deleted file", date: "2023-11-18", status: "error" },
];

const statusVariantMap: { [key: string]: string } = {
  success: "default",
  processing: "secondary",
  error: "destructive",
};

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("All");

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <main className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Zach's Sales Dashboard </h1>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"}>Select Date</Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="end">
              <Calendar mode="single" selected={date} onSelect={handleDateSelect} />
            </PopoverContent>
          </Popover>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Category 1">Category 1</SelectItem>
              <SelectItem value="Category 2">Category 2</SelectItem>
            </SelectContent>
          </Select>
          <Button>Refresh Data</Button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-semibold">$12,345</h2>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>

        {/* Card 2 - Stats */}
        <Card>
          <CardHeader>
            <CardTitle>New Users</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-semibold">+1,245</h2>
            <Progress value={50} className="mt-2" />
          </CardContent>
        </Card>

        {/* Card 4 - Recent Activity */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>{activity.user}</TableCell>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell>{activity.date}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariantMap[activity.status] as "default" | "secondary" | "destructive" | "outline"}>{activity.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Card 3 - Chart */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#9B7CB6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
       {/* User Profile Section */}
       <div className="flex justify-end">
       </div>
    </main>
  );
}