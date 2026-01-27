import { Check, Users, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Check,
    title: "১০০% খাঁটি",
    description: "কোনো ভেজাল নেই, শুধুই বিশুদ্ধ পণ্য",
  },
  {
    icon: Users,
    title: "সরাসরি কৃষক থেকে",
    description: "মধ্যস্বত্বভোগী ছাড়াই সরাসরি আপনার কাছে",
  },
  {
    icon: Award,
    title: "গুণমান নিশ্চিত",
    description: "প্রতিটি পণ্য কঠোর মান নিয়ন্ত্রণে উত্তীর্ণ",
  },
  {
    icon: Heart,
    title: "স্বাস্থ্যকর জীবন",
    description: "আপনার পরিবারের সুস্বাস্থ্যের সাথী",
  },
];

const stats = [
  { value: "৫০০০+", label: "সন্তুষ্ট গ্রাহক" },
  { value: "৫০+", label: "বিশ্বস্ত কৃষক" },
  { value: "২০+", label: "প্রিমিয়াম পণ্য" },
  { value: "৬৪", label: "জেলায় ডেলিভারি" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full mb-6 shadow-sm">
              <span className="gold-dot" />
              <span className="text-sm font-medium text-foreground">
                আমাদের সম্পর্কে
              </span>
            </div>

            <h2 className="section-title mb-6">
              বিশ্বাসযোগ্যতার প্রতীক{" "}
              <span className="text-primary">পিওর খাজানা</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              পিওর খাজানা বাংলাদেশের একটি বিশ্বস্ত নাম যা খাঁটি ও প্রাকৃতিক
              খাদ্যপণ্য সরবরাহে নিবেদিত। আমরা বিশ্বাস করি, সুস্বাস্থ্যের শুরু
              হয় বিশুদ্ধ খাবার থেকে।
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              বাংলাদেশের বিভিন্ন অঞ্চলের কৃষকদের সাথে সরাসরি কাজ করে আমরা
              নিশ্চিত করি যে প্রতিটি পণ্য সর্বোচ্চ গুণমানের এবং সম্পূর্ণ
              প্রাকৃতিক।
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />

            <div className="relative p-8 md:p-12">
              {/* Main Visual */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-card rounded-full shadow-lg mb-4">
                  <span className="text-6xl animate-float">🌾</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  আমাদের সাফল্য
                </h3>
                <p className="text-muted-foreground">
                  গ্রাহকদের বিশ্বাসই আমাদের অনুপ্রেরণা
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="card-fresh text-center p-6"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
