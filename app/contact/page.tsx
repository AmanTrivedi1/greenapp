import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-[1300px] m-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-primary-color-light font-medium mb-2">
              HAVE QUESTIONS?
            </h3>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <div className="flex gap-4">
                <Input placeholder="Email*" className="w-1/2" />
                <Input placeholder="Phone" className="w-1/2" />
              </div>
              <Textarea
                placeholder=" Whats your message *"
                className="min-h-[150px]"
              />
              <Button className="bg-primary-color-light text-white hover:bg-primary-color-light hover:text-white w-full sm:w-auto px-8">
                Get In Touch
              </Button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-2">Have any questions?</h2>
            <h3 className="text-2xl font-bold mb-4">Information</h3>
            <p className=" mb-6">Electing the naturally best since 2008.</p>
            <div className="space-y-6">
              {[
                {
                  name: "Novark Vet Health Inc.",
                  address: "Antwerp , Anwesen, Belgium, EU ",
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
                <div>
                  <img className="max-w-40  h-40" src="qrcode.jpeg" alt="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
