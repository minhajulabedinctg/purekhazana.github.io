import { ArrowRight, Sparkles, Shield, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                ১০০% খাঁটি ও প্রাকৃতিক
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up stagger-1">
              বিশুদ্ধতার{" "}
              <span className="text-primary relative">
                খাজানা
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="hsl(var(--accent))"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              আপনার ঘরে
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up stagger-2">
              বাংলাদেশের সেরা কৃষকদের কাছ থেকে সরাসরি আপনার দরজায় পৌঁছে যাচ্ছে
              খাঁটি মধু, ঘি, তেল এবং আরও অনেক কিছু। কোনো ভেজাল নেই, শুধুই
              বিশুদ্ধতা।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up stagger-3">
              <a href="#products" className="btn-primary group">
                পণ্য দেখুন
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#about" className="btn-secondary">
                আমাদের সম্পর্কে জানুন
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-up stagger-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">গুণমান নিশ্চিত</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">দ্রুত ডেলিভারি</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up stagger-2">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Background Circle */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full" />

              {/* Floating Product Cards */}
              <div className="absolute top-8 left-0 card-fresh p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-2xl">
                    🍯
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">খাঁটি মধু</p>
                    <p className="text-xs text-muted-foreground">সুন্দরবনের</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-0 card-fresh p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-2xl">
                    🧈
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">দেশি ঘি</p>
                    <p className="text-xs text-muted-foreground">গাওয়া ঘি</p>
                  </div>
                </div>
              </div>

              {/* Main Visual */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                  <div className="text-8xl md:text-9xl animate-float" style={{ animationDelay: "0.5s" }}>
                    🌿
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
