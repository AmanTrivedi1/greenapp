import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-[1300px] m-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-primary-color-light font-medium mb-2">HAVE QUESTIONS?</h3>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <div className="flex gap-4">
                <Input placeholder="Email*" className="w-1/2" />
                <Input placeholder="Phone" className="w-1/2" />
              </div>
              <Textarea
                placeholder="Tell Us About Project *"
                className="min-h-[150px]"
              />
              <Button className="bg- text-white w-full sm:w-auto px-8">
                Get In Touch
              </Button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-2">Have any questions?</h2>
            <h3 className="text-2xl font-bold mb-4">Information</h3>
            <p className=" mb-6">
              Electing the naturally best since 2008.
            </p>
            <div className="space-y-6">
              {[
                {
                  name: "Novark Vet Health Inc.",
                  address:
                    "9/A36 Kuklen Industrial and Commercial Zone,Sofia 1505, Bulgaria, Balkans, EU",
                  color: "bg-green-500",
                },
                {
                  name: "Novark Vet Health Inc.",
                  address: "61 Rue de Bassano, 75008 Paris, France",
                  color: "bg-yellow-500",
                },
                {
                  name: "Novark Vet Health Inc.",
                  address: "Antwerp , Anwesen, Belgium , EU",
                  color: "bg-green-800",
                },
                {
                  name: "Novark Skabdubaven A/B",
                  address: "Birkemose clle 50, 6000 Kolding, Danmark",
                  color: "bg-green-500",
                },
                {
                  name: "Novark Polska Spz z 0.0.",
                  address: "UL.Ponderska 8, 15-262 Czosnowl, Polska",
                  color: "bg-green-500",
                },
              ].map((location, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`${location.color} p-2 rounded-full`}>
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{location.name}</h4>
                    <p className="">{location.address}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="bg-primary-color-light p-2 rounded-full">
                  <Mail className="text text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email ID Entreprise</h4>
                  <p className="">info@novarkvethealth.com</p>
                  <p className="">sales@novarkvethealth.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
