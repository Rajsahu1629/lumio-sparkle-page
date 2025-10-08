import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  const upcomingClasses = [
    { subject: "Mathematics GCSE", time: "Today, 4:00 PM", students: 4, topic: "Quadratic Equations" },
    { subject: "Physics A-Level", time: "Today, 6:00 PM", students: 3, topic: "Thermodynamics" },
    { subject: "Mathematics GCSE", time: "Tomorrow, 4:00 PM", students: 5, topic: "Trigonometry" },
  ];

  const recentClasses = [
    { subject: "Chemistry", students: 4, rating: 4.8, date: "Yesterday" },
    { subject: "Mathematics", students: 5, rating: 4.9, date: "2 days ago" },
  ];

  const students = [
    { name: "Alex Johnson", subjects: "Maths, Physics", progress: 85, lastSeen: "Today" },
    { name: "Emma Wilson", subjects: "Chemistry", progress: 72, lastSeen: "Yesterday" },
    { name: "Oliver Brown", subjects: "Maths", progress: 68, lastSeen: "2 days ago" },
    { name: "Sophie Davis", subjects: "Physics, Maths", progress: 91, lastSeen: "Today" },
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
          <h1 className="text-3xl font-bold mb-2">Welcome, Dr. Rajesh! 👨‍🏫</h1>
          <p className="text-muted-foreground">You have 2 classes today with 7 students</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Students</CardDescription>
              <CardTitle className="text-3xl">24</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">+3 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Classes This Month</CardDescription>
              <CardTitle className="text-3xl">42</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">18 hours taught</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Average Rating</CardDescription>
              <CardTitle className="text-3xl">4.9 ⭐</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">From 156 reviews</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Earnings (Month)</CardDescription>
              <CardTitle className="text-3xl">£980</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Classes */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Your upcoming classes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingClasses.map((cls, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{cls.subject}</h4>
                        {i === 0 && <Badge variant="default">Next</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{cls.topic}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <p className="text-xs text-muted-foreground">{cls.time}</p>
                        <p className="text-xs text-muted-foreground">{cls.students} students</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Start Class</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* My Students */}
            <Card>
              <CardHeader>
                <CardTitle>My Students</CardTitle>
                <CardDescription>Track student progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {students.map((student, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{student.name}</h4>
                        <p className="text-xs text-muted-foreground">{student.subjects}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{student.progress}%</p>
                      <p className="text-xs text-muted-foreground">{student.lastSeen}</p>
                    </div>
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
                <Button className="w-full" variant="default">Create New Class</Button>
                <Button className="w-full" variant="outline">Upload Materials</Button>
                <Button className="w-full" variant="outline">View Schedule</Button>
                <Button className="w-full" variant="outline">Message Students</Button>
              </CardContent>
            </Card>

            {/* Recent Classes */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Classes</CardTitle>
                <CardDescription>Past sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentClasses.map((cls, i) => (
                  <div key={i} className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">{cls.subject}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{cls.students} students</span>
                      <span className="text-xs font-medium">{cls.rating} ⭐</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{cls.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Teaching Tip */}
            <Card className="bg-secondary/5 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-sm">💡 Teaching Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Students who receive feedback within 24 hours show 35% better retention!</p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-sm">🏆 Recent Achievement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-1">Top Rated Teacher</p>
                <p className="text-xs text-muted-foreground">You've maintained a 4.9+ rating for 3 months!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
