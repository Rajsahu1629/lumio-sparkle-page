import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const upcomingClasses = [
    { subject: "Mathematics", date: "Today, 4:00 PM", tutor: "Dr. Rajesh Kumar", topic: "Algebra - Quadratic Equations" },
    { subject: "Physics", date: "Tomorrow, 3:00 PM", tutor: "Prof. Priya Sharma", topic: "Motion & Forces" },
    { subject: "English", date: "Friday, 5:00 PM", tutor: "Mr. Amit Patel", topic: "Macbeth Analysis" },
  ];

  const recentRecordings = [
    { subject: "Chemistry", topic: "Periodic Table", duration: "45 min", date: "2 days ago" },
    { subject: "Biology", topic: "Cell Structure", duration: "50 min", date: "3 days ago" },
  ];

  const subjects = [
    { name: "Mathematics", progress: 68, nextClass: "Today 4:00 PM" },
    { name: "Physics", progress: 45, nextClass: "Tomorrow 3:00 PM" },
    { name: "Chemistry", progress: 82, nextClass: "Wednesday 4:00 PM" },
    { name: "English", progress: 56, nextClass: "Friday 5:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">LumioLearn</Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Button variant="outline" size="sm">My Profile</Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground">You have 1 class today and 2 upcoming this week</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Learning Streak</CardDescription>
              <CardTitle className="text-3xl">12 🔥</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Classes Completed</CardDescription>
              <CardTitle className="text-3xl">34</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Avg. Grade Improvement</CardDescription>
              <CardTitle className="text-3xl">+1.2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Across all subjects</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Badges Earned</CardDescription>
              <CardTitle className="text-3xl">8 🏆</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">New: Quick Learner</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Classes */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Classes</CardTitle>
                <CardDescription>Your schedule for this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingClasses.map((cls, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{cls.subject}</h4>
                        {i === 0 && <Badge variant="default">Today</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{cls.topic}</p>
                      <p className="text-xs text-muted-foreground mt-1">with {cls.tutor} • {cls.date}</p>
                    </div>
                    <Button size="sm" variant="outline">Join Class</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Subject Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Subject Progress</CardTitle>
                <CardDescription>Track your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {subjects.map((subject, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{subject.name}</span>
                      <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Next class: {subject.nextClass}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" variant="default">Book New Class</Button>
                <Button className="w-full" variant="outline">Ask a Question</Button>
                <Button className="w-full" variant="outline">View Recordings</Button>
                <Button className="w-full" variant="outline">Practice Tests</Button>
              </CardContent>
            </Card>

            {/* Recent Recordings */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Recordings</CardTitle>
                <CardDescription>Rewatch your classes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentRecordings.map((rec, i) => (
                  <div key={i} className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm mb-1">{rec.subject}</h4>
                    <p className="text-xs text-muted-foreground">{rec.topic}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-muted-foreground">{rec.duration}</span>
                      <span className="text-xs text-muted-foreground">{rec.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Performance Tip */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-sm">💡 Learning Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Review your recordings within 24 hours to improve retention by 40%!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
