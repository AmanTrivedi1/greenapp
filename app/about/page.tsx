"use client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Dna, Leaf, ShieldCheck, Truck, Users } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';

export default function AboutPage() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="max-w-[1300px] m-auto">
      <div className="min-h-screen ">
        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">
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

            <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
              <AlertDialogTrigger asChild>
                <Button className="mt-4 bg-primary-color-light hover:bg-primary-color hover:text-white">
                  Read More
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Empowering Your Body, Naturally
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                  <p className="text-sm text-start my-2 dark:text-white/70">
                    NOVARK Group is a large manufacturer of Amino acids for
                    livestock and pets, involved in both production and sales.
                    It is also one of the Top 50 Enterprises in Europe.
                    Established in 2008, the company was restructured into
                    NOVARK VET HEALTH INC., which has passed the ISO-9001
                    quality system certification, granting it autonomy in import
                    and export operations.
                  </p>

                  <p className="text-sm text-start my-2 dark:text-white/70">
                    Products from NOVARK are sold in several countries across
                    North and South America, Europe, Asia, Australia, and South
                    Africa, earning the company high reputation and popularity
                    internationally...
                  </p>

                  <p className="text-sm text-start my-2 dark:text-white/70">
                    As NOVARK looks to the future, it remains committed to
                    innovation and pragmatic growth, seeking collaboration with
                    partners both at home and abroad to pursue shared
                    development...
                  </p>
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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
            <Link href="/products">
              <Button
                size="lg"
                className="bg-primary-color-light hover:bg-primary-color hover:text-white"
              >
                Explore Our Products
              </Button>
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
