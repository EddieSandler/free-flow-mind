'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';



// Main App Component
export default function MindfulFlowApp() {
  // State management for different sections
  const [gratitude, setGratitude] = useState(['the weather', 'my dog', 'life']);
  const [tasks, setTasks] = useState(['write code', 'have lunch', 'write more code']);
  const [callList, setCallList] = useState(['mom', 'brother', 'wife']);
  const [meditationFocus, setMeditationFocus] = useState('the true nature of the mind');
  const [mindfulnessQuote, setMindfulnessQuote] = useState('all appearances are appearances to the mind');
  const [soberDays, setSoberDays] = useState(3);
  const [nicotineFreeDay, setNicotineFreeDay] = useState(3);
  const [wins, setWins] = useState(['walked dog', 'finished project']);
  const [improvements, setImprovements] = useState(['practice python', 'improve resume']);
  const [weeklyGoals, setWeeklyGoals] = useState(['get new job']);
  const [journalReflection, setJournalReflection] = useState('had a great day');

  // Generic function to add items to lists
  const addItemToList = (setter: { (value: React.SetStateAction<string[]>): void; (value: React.SetStateAction<string[]>): void; (value: React.SetStateAction<string[]>): void; (arg0: (prev: any) => any[]): void; }) => (newItem: string) => {
    if (newItem.trim()) {
      setter((prev: any) => [...prev, newItem.trim()]);
    }
  };

  // Generic function to remove items from lists
  const removeItemFromList = (setter: { (value: React.SetStateAction<string[]>): void; (value: React.SetStateAction<string[]>): void; (value: React.SetStateAction<string[]>): void; (arg0: (prev: any) => any): void; }) => (itemToRemove: any) => {
    setter((prev: any[]) => prev.filter((item: any) => item !== itemToRemove));
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-6">Mindful Flow: Your Spiritual Companion</h1>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="daily">Daily Tracking</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="reflection">Reflection</TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Gratitude Section */}
            <Card>
              <CardHeader>
                <CardTitle>Daily Gratitude</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {gratitude.map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                      {item}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeItemFromList(setGratitude)(item)}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
                <Input
                  placeholder="Add gratitude item"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const inputElement = e.target as HTMLInputElement;
                      addItemToList(setGratitude)(inputElement.value);
                      inputElement.value = '';
                    }
                  }}
                />
              </CardContent>
            </Card>

            {/* Today's Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center">
                      {task}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeItemFromList(setTasks)(task)}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
                <Input
                  placeholder="Add task"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const inputElement = e.target as HTMLInputElement;
                      addItemToList(setTasks)(inputElement.value);
                      inputElement.value = '';
                    }
                  }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Spiritual & Mindfulness Section */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Morning Meditation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={meditationFocus}
                  onChange={(e) => setMeditationFocus(e.target.value)}
                  placeholder="Your meditation focus"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Mindfulness Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={mindfulnessQuote}
                  onChange={(e) => setMindfulnessQuote(e.target.value)}
                  placeholder="Your mindfulness quote"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="goals">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Tracking Section */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Sober Days:</span>
                    <Input
                      type="number"
                      value={soberDays}
                      onChange={(e) => setSoberDays(Number(e.target.value))}
                      className="w-20"
                    />
                  </div>
                  <div className="flex justify-between">
                    <span>Nicotine Free Days:</span>
                    <Input
                      type="number"
                      value={nicotineFreeDay}
                      onChange={(e) => setNicotineFreeDay(Number(e.target.value))}
                      className="w-20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Goals */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {weeklyGoals.map((goal, index) => (
                    <li key={index} className="flex justify-between items-center">
                      {goal}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeItemFromList(setWeeklyGoals)(goal)}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
                <Input
                  placeholder="Add weekly goal"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const inputElement = e.target as HTMLInputElement;
                      addItemToList(setWeeklyGoals)(inputElement.value);
                      inputElement.value = '';
                    }
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reflection">
          <Card>
            <CardHeader>
              <CardTitle>Nightly Journal Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={journalReflection}
                onChange={(e) => setJournalReflection(e.target.value)}
                placeholder="Write your daily reflection"
                rows={6}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}