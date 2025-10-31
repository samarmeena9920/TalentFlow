import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              HIRE TOP TALENT, FASTER
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white">
              Dedicated Recruiting &<br />
              Employee Management<br />
              Solutions
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Transform your hiring process with our cutting-edge platform. 
              Streamline recruitment, manage candidates, and build winning teams faster than ever.
            </p>

            <div className="flex gap-4">
              <Button 
                asChild
                size="lg" 
                className="h-14 px-8 text-base bg-[#2563EB] hover:bg-[#1E40AF] text-white"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  FREE CONSULTATION
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base bg-white text-[#2563EB] hover:bg-white/90 border-transparent"
              >
                <Link to="/jobs">
                  View Open Positions
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:block">
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              POWERFUL FEATURES
            </Badge>
            <h2 className="text-5xl font-bold mb-6">Why Choose TalentFlow?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to streamline your recruitment process and build exceptional teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Briefcase className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Job Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create, edit, and organize job postings with ease. Track applications in real-time.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all">
                <Users className="h-7 w-7 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Candidate Pipeline</h3>
              <p className="text-muted-foreground leading-relaxed">
                Manage 1000+ candidates efficiently with advanced search and filtering tools.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                <Target className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kanban Board</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visualize your recruitment pipeline with drag-and-drop candidate management.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6 group-hover:bg-success group-hover:scale-110 transition-all">
                <TrendingUp className="h-7 w-7 text-success group-hover:text-success-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Assessments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build custom assessments with conditional logic and automated scoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#3B82F6] via-[#6366F1] to-[#A78BFA]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzBoNHYzMGgtNHptMTAgMGg0djMwaC00em0tMjAgMGg0djMwaC00em0xMC0xMGg0djQwaC00em0xMCAwaDR2NDBoLTR6bS0yMCAwaDR2NDBoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-white/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform drop-shadow-lg">1000+</div>
              <div className="text-lg text-white font-medium tracking-wide">Active Candidates</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform drop-shadow-lg">25+</div>
              <div className="text-lg text-white font-medium tracking-wide">Open Positions</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform drop-shadow-lg">98%</div>
              <div className="text-lg text-white font-medium tracking-wide">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform drop-shadow-lg">24/7</div>
              <div className="text-lg text-white font-medium tracking-wide">Platform Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join hundreds of companies that trust TalentFlow to build their dream teams
          </p>
          <Button size="lg" className="h-14 px-10 text-base gap-2 shadow-2xl shadow-primary/50">
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
