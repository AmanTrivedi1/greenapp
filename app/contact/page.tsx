"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1300px] m-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-primary-color-light font-medium mb-2">
              HAVE QUESTIONS?
            </h3>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="flex gap-4">
                <Input
                  placeholder="Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-1/2"
                  required
                />
                <Input
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-1/2"
                />
              </div>
              <Textarea
                placeholder="What's your message*"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px]"
                required
              />
              <Button
                className="bg-primary-color-light text-white hover:bg-primary-color-light hover:text-white w-full sm:w-auto px-8"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Get In Touch"}
              </Button>
              {responseMessage && <p>{responseMessage}</p>}
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
              <div className="flex flex-col items-start gap-4">
                <div>
                  <img className="max-w-40  h-40" src="qrcode.jpeg" alt="/" />
                </div>
                <div>For any queries kindly reach us to at: support@novarkvethealth.be</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
