import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DemoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    ageYear: "",
    subject: "",
    preferredTime: "",
    parentEmail: "",
    parentPhone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo booking:", formData);
    
    toast({
      title: "🎉 Demo Confirmed!",
      description: "Zoom link sent to your email. We'll see you soon!",
      duration: 5000,
    });

    // Reset form
    setFormData({
      studentName: "",
      ageYear: "",
      subject: "",
      preferredTime: "",
      parentEmail: "",
      parentPhone: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="demo-form"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-secondary"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Try Your First Class Free — No Card Required
        </h2>
        <p className="text-center text-white/90 mb-12">
          Join hundreds of students improving their grades
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card p-8 rounded-3xl shadow-2xl space-y-6"
        >
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-foreground mb-2">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Enter student's full name"
            />
          </div>

          <div>
            <label htmlFor="ageYear" className="block text-sm font-medium text-foreground mb-2">
              Age / Year
            </label>
            <select
              id="ageYear"
              name="ageYear"
              value={formData.ageYear}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Select year</option>
              <option value="year-9">Year 9</option>
              <option value="year-10">Year 10</option>
              <option value="year-11">Year 11</option>
              <option value="year-12">Year 12</option>
              <option value="year-13">Year 13</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Select subject</option>
              <option value="maths">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
              <option value="english">English</option>
              <option value="history">History</option>
            </select>
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
              Preferred Time
            </label>
            <input
              type="datetime-local"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="parentEmail" className="block text-sm font-medium text-foreground mb-2">
              Parent Email
            </label>
            <input
              type="email"
              id="parentEmail"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="parent@example.com"
            />
          </div>

          <div>
            <label htmlFor="parentPhone" className="block text-sm font-medium text-foreground mb-2">
              Parent Phone
            </label>
            <input
              type="tel"
              id="parentPhone"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="+44 7XXX XXXXXX"
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full mt-4"
          >
            Book My Free Demo
          </Button>
        </form>
      </div>
    </section>
  );
};

export default DemoForm;
