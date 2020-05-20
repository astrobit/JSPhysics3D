
// fundamental numeric constants
const kEuler = 0.577215664901532861;

// defined fundamental constants (CODATA 2018 except AU)
const kGravityNetwon = 6.67430e-11;//SI
const kCsTransition = 9.19263177e9;
const kPlanck = 6.62607015e-34; // J s
const kAvogadro = 6.0224076e+23;
const kAstronomicalUnit = 1.49597870700e+11; // m (IAU Resolution B2 2012)
const kChargeFundamental = 1.602176634000e-19; // Coulomb // fundamental charge in SI units
const kBoltzmann = 1.380649000000e-23; // J/K
const kSpeedLight = 299792458.0; // m 
const kVacuumPermittivity = 8.8541878128e-12; // SI units
const kCoulomb = kSpeedLight * kSpeedLight * 1.0e-7; // coulomb constant
const kVacuumPermeability = 1.0 / (kSpeedLight * kSpeedLight * kVacuumPermittivity);

	// empirical fundamental constants
const kYear = 365.2421896698 * 86400.0;// Tropical Year 2000 (McCarthy & Seidelmann 2009)  
const kLuminositySolar = 3.828e+26;//J/s (IAU Resolution B3 2015)
const kRadiusSolar = 6.957e+8; // m (IAU Resolution B3 2015)
const kTemperatureSolar = 5772; // K  (IAU Resolution B3 2015)
const kIrradianceSolar = 1.361e3; // J m^{-2} (IAU Resolution B3 2015)
const kH0h = 0.726; // s^{-1} h // WMAP 7

// semi-empircal derived constants
const kESU = kChargeFundamental * kSpeedLight / 10.0; // esu, now defined in terms of speed of light and fundamental charge. //4.80320451e-10;
const kAMU_kg = 1.0e-3 / kAvogadro; // AMU in kg
const kMassProton = 1.007276466621 * kAMU_kg;//kg
const kMassElectron = 5.48579909065e-4 * kAMU_kg;//kg (CODATA 2018)

// derived constants
// combined mass of Sun and Newton's gravitational constant
const kGMSolar = 1.3271244e20; // cm^3 s^2 (IAU Resolution B3 2015)
const kMassSolar = kGMSolar / kGravityNetwon; // g (IAU Resolution B3 2015)

// combined mass of Jupiter and Newton's gravitational constant
const kGMJupiter = 1.2668653e17; // cm^3 s^2 (IAU Resolution B3 2015)
const kMassJupiter = kGMJupiter / kGravityNetwon; // g (IAU Resolution B3 2015)
const kRadiusJupiterPolar = 6.6854e7; // cm  (IAU Resolution B3 2015)
const kRadiusJupiterEquatorial = 7.1492e7; // cm  (IAU Resolution B3 2015)
const kRadiusJupiter = Math.pow(kRadiusJupiterPolar * kRadiusJupiterEquatorial * kRadiusJupiterEquatorial,1.0/3.0); // average radius for volume, cm

// combined mass of Jupiter and Newton's gravitational constant
const kGMEarth = 3.986004e14; // cm^3 s^2 (IAU Resolution B3 2015)
const kMassEarth = kGMEarth / kGravityNetwon; // g (IAU Resolution B3 2015)
const kRadiusEarthPolar = 6.3568e6; // cm  (IAU Resolution B3 2015)
const kRadiusEarthEquatorial = 6.3781e6; // cm  (IAU Resolution B3 2015)
const kRadiusEarth = Math.pow(kRadiusEarthPolar * kRadiusEarthEquatorial * kRadiusEarthEquatorial,1.0/3.0); // average radius for volume, cm

const kParsec_m = kAstronomicalUnit * 648000.0 / Math.PI; // 1 pc in m
const kMegaparsec_m = kParsec_m * 1.0e6; // 1 Mpc in m
const kGigaparsec_m = kParsec_m * 1.0e12; // 1 Gpc in m
const kH0std = 100.0e3 / (kMegaparsec_m); // s^{-1} h

const khc = kPlanck * kSpeedLight; // 

const kRadiationDensity = 8.0 * Math.PI * Math.PI * Math.PI * Math.PI * Math.PI * kBoltzmann * kBoltzmann * kBoltzmann * kBoltzmann / (15.0 * khc * khc * khc); //7.5657e-15; // erg cm^{-3} K^{-4}
const kStefanBoltzman = kRadiationDensity * kSpeedLight * 0.25;////cgs
const kWein = khc / kBoltzmann / 4.965114231e2;// nm
const kBoltzmann_eV = kBoltzmann / kChargeFundamental; // eV/K 
const kPlanckReduced = kPlanck / (2.0 * Math.PI); // erg s //@@
const kPlanck_eV = kPlanck / kChargeFundamental;// eV s 
const kPlanckReduced_eV = kPlanckReduced / kChargeFundamental;// eV s
const khc_eVnm = kPlanckReduced_eV * kSpeedLight * 1e9;//eV nm
const kH0 = kH0std * kH0h;
const kFineStructure = kCoulomb * kChargeFundamental * kChargeFundamental / (khc) * 2.0 * Math.PI;
const kRadiusBohr = kPlanckReduced * kPlanckReduced * kCoulomb / (kMassElectron * kChargeFundamental * kChargeFundamental); // m
const kRydberg = (2.0 * Math.PI * Math.PI * kMassElectron * kESU * kESU * kESU * kESU) / (kPlanck * kPlanck);
const kRydberg_eV = kRydberg / kChargeFundamental;
const kMassHydrogen = kMassElectron + kMassProton - kRydberg / (kSpeedLight * kSpeedLight);
const kCrossSectionThomsonElectron = kChargeFundamental * kChargeFundamental * kChargeFundamental * kChargeFundamental * kCoulomb * kCoulomb / (kMassElectron * kMassElectron * kSpeedLight * kSpeedLight * kSpeedLight * kSpeedLight) * 8.0 * Math.PI / 3.0;
const kCrossSectionThomsonProton = kChargeFundamental * kChargeFundamental * kChargeFundamental * kChargeFundamental * kCoulomb * kCoulomb / (kMassProton * kMassProton * kSpeedLight * kSpeedLight * kSpeedLight * kSpeedLight) * 8.0 * Math.PI / 3.0;

