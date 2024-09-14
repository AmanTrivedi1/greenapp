import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dna, Leaf, ShieldCheck, Truck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-[1300px] m-auto">
      <div className="min-h-screen ">
        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 text-center">
            <h2 className="text-4xl font-bold  mb-4">
              Empowering Your Body, Naturally
            </h2>
            <p className="text-sm text-start my-2 dark:text-white/70">
              NOVARK Group is a large manufacturer of Amino acids for livestock
              and pets, involved in both production and sales. It is also one of
              the Top 50 Enterprises in Europe. Established in 2008, the company
              was restructured into NOVARK VET HEALTH INC., which has passed the
              ISO-9001 quality system certification, granting it autonomy in
              import and export operations.
            </p>

            <p className="text-sm text-start my-2 dark:text-white/70">
              Products from NOVARK are sold in several countries across North
              and South America, Europe, Asia, Australia, and South Africa,
              earning the company high reputation and popularity
              internationally. NOVARK also boasts a team of professional talents
              in chemical management, production, R&D, and trade, with technical
              experts making up 30% of the workforce.
            </p>

            <p className="text-sm text-start my-2 dark:text-white/70">
              The company adheres strictly to ISO9001, ISO14001, and GB/T-28001
              standards, exercising careful supervision and control over every
              production stage. This approach ensures the perfect balance
              between social responsibility, employee health, environmental
              protection, and product quality.
            </p>

            <p className="text-sm text-start my-2 dark:text-white/70">
              NOVARK VET HEALTH has also developed an international procurement
              team, engaged in sourcing chemical materials for international
              clients. With rich procurement experience and a dedicated QA team,
              NOVARK has helped foreign companies procure a range of chemical
              engineering products, setting a benchmark in the chemical
              industry.
            </p>

            <p className="text-sm text-start my-2 dark:text-white/70">
              Over the years, thanks to exceptional customer service,
              high-quality products, competitive pricing, and a professional
              team, NOVARK has rapidly expanded from a small factory into a
              comprehensive chemical group with global reach. Today, it operates
              in numerous countries, providing one-stop buying and service
              solutions for customers worldwide.
            </p>

            <p className="text-sm text-start my-2 dark:text-white/70">
              As NOVARK looks to the future, it remains committed to innovation
              and pragmatic growth, seeking collaboration with partners both at
              home and abroad to pursue shared development. Through its products
              and services, NOVARK enhances animal health, contributing to the
              prevention, control, and treatment of diseases.
            </p>

            <p className="text-sm text-start dark:text-white/70">
              Guided by the vision of "Food and Companionship Enriching Life,"
              NOVARK ensures integrity, affordability, and availability in the
              feed supply. Its factory, built according to WHO standards (GMP,
              GLP, GSP), upholds sustainable and eco-friendly practices to
              produce high-quality products.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              Why Choose AminoBoost?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <ShieldCheck className="h-10 w-10 text-primary-color-light" />
                  ),
                  title: "Premium Quality",
                  description:
                    "Our amino supplements are made with the highest quality ingredients, ensuring maximum purity and effectiveness.",
                },

                {
                  icon: <Leaf className="h-10 w-10 text-primary-color-light" />,
                  title: "Natural Approach",
                  description:
                    "We use natural ingredients and avoid artificial additives, prioritizing your health and well-being.",
                },
                {
                  icon: (
                    <Users className="h-10 w-10 text-primary-color-light" />
                  ),
                  title: "Community Focused",
                  description:
                    "Join our community of health enthusiasts and get expert advice on optimizing your supplement regimen.",
                },
                {
                  icon: (
                    <Truck className="h-10 w-10 text-primary-color-light" />
                  ),
                  title: "Fast Shipping",
                  description:
                    "Enjoy quick and reliable shipping on all orders, with free delivery on purchases over $50.",
                },
                {
                  icon: <Dna className="h-10 w-10 text-primary-color-light" />,
                  title: "Customized Solutions",
                  description:
                    "We offer personalized amino blends tailored to your specific fitness and health goals.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{item.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="dark:text-white/70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Boost Your Performance?
            </h3>
            <p className="text-xl dark:text-white/70 mb-8">
              Discover our range of premium amino supplements and take your
              fitness journey to the next level.
            </p>
            <Button
              size="lg"
              className=" bg-primary-color-light hover:bg-primry-color hover:text-white"
            >
              Explore Our Products
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
}
