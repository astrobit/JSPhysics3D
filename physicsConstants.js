
// fundamental numeric constants
const kEuler = 0.577215664901532861;

// defined fundamental constants (CODATA 2018 except AU)
const kGravityNewton = 6.67430e-11;//SI
const kCsTransition = 9.19263177e9;
const kPlanck = 6.62607015e-34; // J s
const kAvogadro = 6.0224076e+23;
const kAstronomicalUnit = 1.49597870700e+11; // m (IAU Resolution B2 2012)
const kChargeFundamental = 1.602176634000e-19; // Coulomb // fundamental charge in SI units
const kBoltzmann = 1.380649000000e-23; // J/K
const kSpeedLight = 299792458.0; // m 

// measured fundamental constants
const kVacuumPermittivity = 8.8541878128e-12; // SI units

	// empirical fundamental constants
const kYear = 365.2421896698 * 86400.0;// Tropical Year 2000 (McCarthy & Seidelmann 2009)  
const kLuminositySolar = 3.828e+26;//J/s (IAU Resolution B3 2015)
const kRadiusSolar = 6.957e+8; // m (IAU Resolution B3 2015)
const kTemperatureSolar = 5772; // K  (IAU Resolution B3 2015)
const kIrradianceSolar = 1.361e3; // J m^{-2} (IAU Resolution B3 2015)
const kH0h = 0.726; // s^{-1} h // WMAP 7

// semi-empircal derived constants
const kESU = kChargeFundamental * kSpeedLight * 10.0; // esu, now defined in terms of speed of light and fundamental charge. //4.80320451e-10;
const kAMU_kg = 1.0e-3 / kAvogadro; // AMU in kg
const kMassProton = 1.67262192369e-27;//kg
const kMassElectron = 9.1093837015e-31;//kg (CODATA 2018)

// derived constants
// combined mass of Sun and Newton's gravitational constant
const kGMSolar = 1.3271244e20; // m^3 s^2 (IAU Resolution B3 2015)
const kMassSolar = kGMSolar / kGravityNewton; // g (IAU Resolution B3 2015)

// combined mass of Jupiter and Newton's gravitational constant
const kGMJupiter = 1.2668653e17; // m^3 s^2 (IAU Resolution B3 2015)
const kMassJupiter = kGMJupiter / kGravityNewton; // g (IAU Resolution B3 2015)
const kRadiusJupiterPolar = 6.6854e7; // m  (IAU Resolution B3 2015)
const kRadiusJupiterEquatorial = 7.1492e7; // m  (IAU Resolution B3 2015)
const kRadiusJupiter = Math.pow(kRadiusJupiterPolar * kRadiusJupiterEquatorial * kRadiusJupiterEquatorial,1.0/3.0); // average radius for volume, m

// combined mass of Jupiter and Newton's gravitational constant
const kGMEarth = 3.986004e14; // m^3 s^2 (IAU Resolution B3 2015)
const kMassEarth = kGMEarth / kGravityNewton; // g (IAU Resolution B3 2015)
const kRadiusEarthPolar = 6.3568e6; // m  (IAU Resolution B3 2015)
const kRadiusEarthEquatorial = 6.3781e6; // m  (IAU Resolution B3 2015)
const kRadiusEarth = Math.pow(kRadiusEarthPolar * kRadiusEarthEquatorial * kRadiusEarthEquatorial,1.0/3.0); // average radius for volume, m

const kParsec = kAstronomicalUnit * 648000.0 / Math.PI; // 1 pc in m
const kMegaparsec = kParsec * 1.0e6; // 1 Mpc in m
const kGigaparsec = kParsec * 1.0e9; // 1 Gpc in m
const kH0std = 100.0e3 / (kMegaparsec); // s^{-1} h

const kLightYear = kYear * kSpeedLight;

// derived constants

const khc = kPlanck * kSpeedLight; // 

const kCoulomb = kSpeedLight * kSpeedLight * 1.0e-7; // coulomb constant
const kVacuumPermeability = 1.0 / (kSpeedLight * kSpeedLight * kVacuumPermittivity);

const kRadiationDensity = 8.0 * Math.PI * Math.PI * Math.PI * Math.PI * Math.PI * kBoltzmann * kBoltzmann * kBoltzmann * kBoltzmann / (15.0 * khc * khc * khc); //7.5657e-15; // J m^{-3} K^{-4}
const kStefanBoltzman = kRadiationDensity * kSpeedLight * 0.25;////cgs
const kWein = khc / kBoltzmann / 4.965114231;// m
const kBoltzmann_eV = kBoltzmann / kChargeFundamental; // eV/K 
const kPlanckReduced = kPlanck / (2.0 * Math.PI); // J s //@@
const kPlanck_eV = kPlanck / kChargeFundamental;// eV s 
const kPlanckReduced_eV = kPlanckReduced / kChargeFundamental;// eV s
const khc_eVnm = kPlanck_eV * kSpeedLight * 1e9;//eV nm
const kH0 = kH0std * kH0h;
const kFineStructure = kCoulomb * kChargeFundamental * kChargeFundamental / (khc) * 2.0 * Math.PI;
const kRadiusBohr = kPlanckReduced * kPlanckReduced / (kCoulomb * kMassElectron * kChargeFundamental * kChargeFundamental); // m
const kRydberg = (kMassElectron * kChargeFundamental * kChargeFundamental * kChargeFundamental * kChargeFundamental) / (8.0 * kVacuumPermittivity * kVacuumPermittivity * kPlanck * kPlanck);
const kRydberg_eV = kRydberg / kChargeFundamental;
const kMassHydrogen = kMassElectron + kMassProton - kRydberg / (kSpeedLight * kSpeedLight);
const kCrossSectionThomsonElectron = (kChargeFundamental * kChargeFundamental / kMassElectron)**2 * 8.0e-14 * Math.acos(0.5); //Math.PI / 3.0;
const kCrossSectionThomsonProton = kChargeFundamental * kChargeFundamental * kChargeFundamental * kChargeFundamental / (kMassProton * kMassProton) * 8.0e-14 * Math.PI / 3.0;

