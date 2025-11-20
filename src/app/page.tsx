"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Trophy, Flag, Ticket, Calendar, BarChart3, MessageSquare, Award, Mail, Twitter, Instagram, Youtube, Facebook, Zap, Users, Cpu, Star, User } from 'lucide-react';

export default function F1ChampionshipPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="animatedAurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {"name":"Teams","id":"teams"},
            {"name":"Drivers","id":"drivers"},
            {"name":"Schedule","id":"schedule"},
            {"name":"News","id":"news"},
            {"name":"Contact","id":"contact"}
          ]}
          brandName="F1 Championship"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Formula 1 Championship 2024"
          description="Experience the pinnacle of motorsport with participating F1 teams, legendary drivers, and cutting-edge racing machines competing for the world championship"
          tag="F1 Championship"
          tagIcon={Trophy}
          buttons={[
            {"text":"Explore Teams","href":"teams"},
            {"text":"View Schedule","href":"schedule"}
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637641461-rl55czhs.jpg"
          imageAlt="Formula 1 racing car on track"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Formula 1 represents the ultimate fusion of human skill, cutting-edge technology, and raw speed. Our championship brings together the world's most talented drivers and innovative teams in a relentless pursuit of racing excellence."
          features={[
            {"icon":Zap,"title":"Extreme Speed","description":"Cars reaching speeds of over 350 km/h with advanced aerodynamics and hybrid power units delivering maximum performance on every circuit."},
            {"icon":Users,"title":"Elite Teams","description":"Ten world-class constructor teams featuring legendary brands like Mercedes, Ferrari, Red Bull, and McLaren with hundreds of engineers and specialists."},
            {"icon":Trophy,"title":"Championship Glory","description":"Drivers and constructors competing for the most prestigious titles in motorsport across 23 race weekends around the globe."},
            {"icon":Cpu,"title":"Advanced Technology","description":"Revolutionary hybrid engines, sophisticated telemetry systems, and cutting-edge materials pushing the boundaries of automotive innovation."}
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Participating F1 Teams"
          description="Meet the elite constructor teams and their star drivers competing in the 2024 Formula 1 World Championship"
          tag="Teams & Drivers"
          tagIcon={Flag}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {"id":1,"title":"Mercedes-AMG Petronas","description":"The Silver Arrows continue their legacy with Lewis Hamilton and George Russell, featuring advanced hybrid technology and aerodynamic innovations that have dominated recent championships.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637642772-jn6k1jjf.jpg","imageAlt":"Mercedes F1 team garage"},
            {"id":2,"title":"Red Bull Racing","description":"The defending champions led by Max Verstappen and Sergio Perez, known for their aggressive racing strategy and the revolutionary RB19 chassis that redefined F1 performance standards.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637645761-cbzvmda6.jpg","imageAlt":"Red Bull F1 racing team"},
            {"id":3,"title":"Scuderia Ferrari","description":"The Prancing Horse with Charles Leclerc and Carlos Sainz Jr., combining Italian passion with cutting-edge engineering to challenge for both drivers' and constructors' championships.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637647021-ab8t6bml.jpg","imageAlt":"Ferrari F1 racing team"},
            {"id":4,"title":"McLaren Formula 1","description":"The papaya-colored team featuring Lando Norris and Oscar Piastri, returning to winning form with innovative designs and a strong development philosophy focusing on aerodynamic efficiency.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637648687-e767agfm.jpg","imageAlt":"McLaren F1 racing team"}
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="F1 Experience Packages"
          description="Choose your perfect Formula 1 racing experience with exclusive access and premium hospitality"
          tag="Race Packages"
          tagIcon={Ticket}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {"id":"premium","name":"Champions Club Premium","price":"$2,999","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637661543-kidnlloy.jpg","imageAlt":"VIP F1 racing experience"},
            {"id":"standard","name":"Grandstand Experience","price":"$899","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637662446-7lpe107p.jpg","imageAlt":"F1 grandstand tickets"},
            {"id":"basic","name":"General Admission","price":"$299","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637663440-1zd8gase.jpg","imageAlt":"F1 general admission access"}
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your F1 Experience"
          description="Select the perfect package to witness the pinnacle of motorsport"
          tag="Race Weekend Packages"
          tagIcon={Calendar}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {"id":"basic","price":"$299","name":"General Admission","buttons":[{"text":"Book Now","href":"https://tickets.formula1.com"},{"text":"Learn More","href":"packages"}],"features":["General access to circuit grounds","View from public viewing areas","Access to fan zone activities","Official F1 merchandise discount"]},
            {"id":"standard","badge":"Most Popular","badgeIcon":Star,"price":"$899","name":"Grandstand Experience","buttons":[{"text":"Book Now","href":"https://tickets.formula1.com"},{"text":"Learn More","href":"packages"}],"features":["Reserved grandstand seating","Perfect race track views","Complimentary race program","Access to hospitality areas","Driver meet & greet opportunities"]},
            {"id":"premium","price":"$2,999","name":"Champions Club Premium","buttons":[{"text":"Book Now","href":"https://tickets.formula1.com"},{"text":"Contact Sales","href":"contact"}],"features":["VIP hospitality suite access","Premium paddock club experience","Exclusive driver briefings","Gourmet dining and premium beverages","Behind-the-scenes pit lane tours","Official F1 memorabilia package"]}
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Championship Statistics"
          description="Key performance metrics from the 2024 Formula 1 season showcasing the intensity of competition"
          tag="Season Stats"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {"id":"1","value":"23","title":"Races","description":"Grand Prix events across six continents","icon":Flag},
            {"id":"2","value":"10","title":"Teams","description":"Constructor teams competing for championship glory","icon":Users},
            {"id":"3","value":"20","title":"Drivers","description":"Elite racers from around the world","icon":User},
            {"id":"4","value":"350+","title":"km/h","description":"Maximum speeds achieved on racing circuits","icon":Zap}
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Star Drivers"
          description="Meet the world-class racing drivers competing in the 2024 Formula 1 Championship"
          tag="Driver Lineup"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {"id":"1","name":"Lewis Hamilton","role":"Mercedes AMG","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637650017-fepqw5ik.jpg","imageAlt":"Lewis Hamilton F1 driver"},
            {"id":"2","name":"Max Verstappen","role":"Red Bull Racing","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637651086-59utjwxy.jpg","imageAlt":"Max Verstappen F1 driver"},
            {"id":"3","name":"Charles Leclerc","role":"Scuderia Ferrari","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637652136-l208kmk6.jpg","imageAlt":"Charles Leclerc F1 driver"},
            {"id":"4","name":"Lando Norris","role":"McLaren F1","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637654346-5o5cq8u1.jpg","imageAlt":"Lando Norris F1 driver"},
            {"id":"5","name":"George Russell","role":"Mercedes AMG","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637655548-48wqu923.jpg","imageAlt":"George Russell F1 driver"},
            {"id":"6","name":"Sergio Perez","role":"Red Bull Racing","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637656747-0aj91fqr.jpg","imageAlt":"Sergio Perez F1 driver"},
            {"id":"7","name":"Carlos Sainz Jr.","role":"Scuderia Ferrari","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637657788-ziachfwm.jpg","imageAlt":"Carlos Sainz F1 driver"},
            {"id":"8","name":"Oscar Piastri","role":"McLaren F1","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637659026-48h01qsp.jpg","imageAlt":"Oscar Piastri F1 driver"}
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="F1 Fan Experiences"
          description="Hear what racing enthusiasts say about their Formula 1 championship experiences"
          tag="Fan Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {"id":"1","name":"Marcus Johnson","role":"Racing Enthusiast","company":"F1 Fan Club","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637664370-3357p6iw.jpg","imageAlt":"Marcus Johnson F1 fan"},
            {"id":"2","name":"Sarah Williams","role":"Motorsport Journalist","company":"Racing Weekly","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637665420-e8zgqs5m.jpg","imageAlt":"Sarah Williams motorsport journalist"},
            {"id":"3","name":"David Chen","role":"F1 Photographer","company":"Speed Focus Media","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637666749-i5xpgrxd.jpg","imageAlt":"David Chen F1 photographer"},
            {"id":"4","name":"Emma Rodriguez","role":"Team Principal","company":"Racing Academy","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637667706-c8fe4hxw.jpg","imageAlt":"Emma Rodriguez racing team principal"},
            {"id":"5","name":"James Thompson","role":"F1 Commentator","company":"Grand Prix Radio","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637668632-fqsg1c46.jpg","imageAlt":"James Thompson F1 commentator"}
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Official F1 Partners"
          description="Trusted by leading global brands and official Formula 1 sponsors"
          tag="Official Sponsors"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637671109-1hhtfo96.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637672237-8wjfeuhj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637673776-1xbszdk5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637678483-xvg0g5fq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637679341-9vel9344.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637680683-ua08rq1q.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637683598-pz2k1w37.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about Formula 1 teams and racing"
          faqs={[
            {"id":"1","title":"How many teams participate in Formula 1?","content":"Currently, 10 constructor teams participate in Formula 1, each fielding two drivers for a total of 20 drivers competing in the championship. Teams include Mercedes, Red Bull Racing, Ferrari, McLaren, Alpine, Aston Martin, Williams, AlphaTauri, Alfa Romeo, and Haas."},
            {"id":"2","title":"What makes each F1 team unique?","content":"Each F1 team has its own unique identity through their car design, engine supplier partnerships, driver lineup, racing strategy, and team culture. Teams like Ferrari bring Italian passion, Mercedes combines German engineering precision, while Red Bull focuses on innovative aerodynamics and aggressive racing tactics."},
            {"id":"3","title":"How are F1 championship points awarded?","content":"Points are awarded to the top 10 finishers in each race: 1st place receives 25 points, 2nd gets 18 points, 3rd gets 15 points, and so on down to 10th place receiving 1 point. There are separate championships for drivers and constructors (teams)."},
            {"id":"4","title":"What technology do F1 cars use?","content":"Modern F1 cars feature hybrid power units combining a turbocharged V6 engine with two electric motor systems (ERS-K and ERS-H), advanced carbon fiber construction, sophisticated aerodynamics, and cutting-edge telemetry systems for real-time performance monitoring."},
            {"id":"5","title":"How can I attend an F1 race?","content":"F1 race tickets can be purchased through official Formula 1 channels, circuit websites, or authorized ticket vendors. Options range from general admission to premium hospitality packages. Popular races like Monaco, Silverstone, and Monza often sell out quickly, so early booking is recommended."}
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="F1 Racing News"
          description="Latest insights and analysis from the world of Formula 1 racing"
          tag="Racing Blog"
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {"id":"1","category":"Race Analysis","title":"Technical Breakdown: Aerodynamic Innovations","excerpt":"Deep dive into the latest aerodynamic developments and how they're changing the competitive landscape in Formula 1 racing.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637684926-yn8280li.jpg","imageAlt":"F1 race analysis","authorName":"Alex Mitchell","authorAvatar":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637664370-3357p6iw.jpg","date":"15 Dec 2024"},
            {"id":"2","category":"Driver Spotlight","title":"Exclusive: Inside the Mind of a Champion","excerpt":"Rare interview with championship contenders discussing their preparation, mindset, and what it takes to compete at the highest level.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637686293-2l3gycch.jpg","imageAlt":"F1 driver interview","authorName":"Rachel Green","authorAvatar":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637665420-e8zgqs5m.jpg","date":"12 Dec 2024"},
            {"id":"3","category":"Technology","title":"Hybrid Power Units: The Future of Racing","excerpt":"Exploring the advanced hybrid technology that powers modern F1 cars and how it's pushing the boundaries of automotive innovation.","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637687346-e6li1zkd.jpg","imageAlt":"F1 technical analysis","authorName":"Dr. James Wilson","authorAvatar":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637666749-i5xpgrxd.jpg","date":"10 Dec 2024"}
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Updated"
          tagIcon={Mail}
          title="Get F1 Championship Updates"
          description="Subscribe to receive the latest news, race results, and exclusive content from the Formula 1 world championship directly in your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763637641461-rl55czhs.jpg"
          imageAlt="Formula 1 racing updates"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive F1 championship updates and can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="F1 Championship"
          copyrightText="© 2024 Formula 1 World Championship"
          columns={[
            {"title":"Championship","items":[{"label":"Teams","href":"teams"},{"label":"Drivers","href":"drivers"},{"label":"Schedule","href":"schedule"},{"label":"Results","href":"results"}]},
            {"title":"Experience","items":[{"label":"Tickets","href":"https://tickets.formula1.com"},{"label":"Hospitality","href":"packages"},{"label":"Travel","href":"travel"},{"label":"Merchandise","href":"shop"}]},
            {"title":"Media","items":[{"label":"News","href":"news"},{"label":"Videos","href":"videos"},{"label":"Photos","href":"photos"},{"label":"Press","href":"press"}]},
            {"title":"Support","items":[{"label":"Help Center","href":"help"},{"label":"Contact","href":"contact"},{"label":"Technical","href":"technical"},{"label":"Feedback","href":"feedback"}]}
          ]}
          socialLinks={[
            {"icon":Twitter,"href":"https://twitter.com/f1","ariaLabel":"Follow F1 on Twitter"},
            {"icon":Instagram,"href":"https://instagram.com/f1","ariaLabel":"Follow F1 on Instagram"},
            {"icon":Youtube,"href":"https://youtube.com/f1","ariaLabel":"Subscribe F1 on YouTube"},
            {"icon":Facebook,"href":"https://facebook.com/formula1","ariaLabel":"Like F1 on Facebook"}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}