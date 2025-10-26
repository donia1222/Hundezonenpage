"use client";

import { useState, useEffect } from "react";

type CountryCode = "CH" | "DE" | "AT" | "unknown";

interface CountryInfo {
  code: CountryCode;
  flag: string;
  name: string;
}

const countryFlags: Record<CountryCode, CountryInfo> = {
  CH: { code: "CH", flag: "🇨🇭", name: "Schweiz" },
  DE: { code: "DE", flag: "🇩🇪", name: "Deutschland" },
  AT: { code: "AT", flag: "🇦🇹", name: "Österreich" },
  unknown: { code: "unknown", flag: "🐾", name: "" }
};

export function useCountryDetection() {
  const [country, setCountry] = useState<CountryInfo>(countryFlags.unknown);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function detectCountry() {
      try {
        // Intentar detectar país usando API de geolocalización IP
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        const countryCode = data.country_code as string;

        // Verificar si el país detectado es uno de los soportados
        if (countryCode === "CH" || countryCode === "DE" || countryCode === "AT") {
          setCountry(countryFlags[countryCode]);
        } else {
          // País no soportado, usar default
          setCountry(countryFlags.unknown);
        }
      } catch (error) {
        console.error("Error detecting country:", error);
        setCountry(countryFlags.unknown);
      } finally {
        setIsLoading(false);
      }
    }

    detectCountry();
  }, []);

  return { country, isLoading };
}
