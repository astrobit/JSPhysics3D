/** 
@file physicsConstants.js
@brief Common or standard physical constants
@details 
@author Brian W. Mulligan
@version 1.0.0
@date May 2020
@copyright MIT License
*/

/**
Euler constant, 0.577215664901532861
*/
const kEuler = 0.577215664901532861;

// defined fundamental constants (CODATA 2018 except AU)
/**
Newton's Gravitational constant (G), \f$6.67430\times10^{-11}\,\mathrm{N}\,\mathrm{m}^2\,\mathrm{kg}^{-2}\f$ (CODATA 2018)
*/
const kGravityNewton = 6.67430e-11;//SI

/**
Cs-133 hyperfine transition, \f$9.19263177\times10^9\,\mathrm{Hz}\f$ (CODATA 2018)
*/
const kCsTransition = 9.19263177e9;

/**
Planck's constant \f$6.62607015\times10^{-34}\,\mathrm{J}\,\mathrm{s}\f$ (CODATA 2018)
*/
const kPlanck = 6.62607015e-34;

/**
Avogadro's Number \f$6.0224076\times10^{23}\f$ (CODATA 2018)
*/
const kAvogadro = 6.0224076e+23;

/**
Astronomical unit (au) \f$1.49597870700\times10^{11}\,\mathrm{m}\f$ (IAU Resolution B2 2012)
*/
const kAstronomicalUnit = 1.49597870700e+11;

/**
Fundamental (proton) charge \f$1.602176634000\times10^{-19}\,\mathrm{C}\f$ (CODATA 2018)
*/
const kChargeFundamental = 1.602176634000e-19;

/**
Boltzmann constant \f$1.380649\times10^{-23}\,\mathrm{J}\,\mathrm{K}^{-1}\f$ (CODATA 2018)
*/
const kBoltzmann = 1.380649000000e-23;

/**
Boltzmann constant \f$2.99792458\times10^{8}\,\mathrm{m}ps\f$ (CODATA 2018)
*/
const kSpeedLight = 299792458.0;
/**

/**
Permittivity of free space \f$8.8541878128\times10^{-12}\,\mathrm{C}^2\,\mathrm{m}^{-2}\,\mathrm{N}^{-1}\f$ (CODATA 2018)
*/
const kVacuumPermittivity = 8.8541878128e-12;

/**
Tropical year (2000) \f$365.2421896698\,\mathrm{d}\f$ (McCarthy & Seidelmann 2009)
*/
const kYear = 365.2421896698 * 86400.0;

/**
Solar luminosity \f$3.828\times10^{26}\,\mathrm{W}\f$ (IAU Resolution B3 2015)
*/
const kLuminositySolar = 3.828e+26;

/**
Solar radius \f$6.957\times10^{8}\,\mathrm{m}\f$ (IAU Resolution B3 2015)
*/
const kRadiusSolar = 6.957e+8;

/**
Solar temperature \f$5772\,\mathrm{K}\f$ (IAU Resolution B3 2015)
*/
const kTemperatureSolar = 5772;

/**
Solar irradiance \f$1.361e3\,\mathrm{W}\,\mathrm{m}^2\f$ (IAU Resolution B3 2015)
*/
const kIrradianceSolar = 1.361e3;


// semi-empircal derived constants
/**
Fundeamentl charge in esu \f$10 q_e c \sim 4.48\times10^{-10} esu\f$
*/
const kChargeFundamental_esu = kChargeFundamental * kSpeedLight * 10.0;

/**
Atomic mass unit in kg, \f$1.66053906660\times10^{-27}\,\mathrm{kg}\f$ (CODATA 2018)
*/
const kAMU_kg = 1.66053906660e-27;

/**
Mass of a proton, \f$1.67262192369\times10^{-27}\,\mathrm{kg}\f$ (CODATA 2018)
*/
const kMassProton = 1.67262192369e-27;

/**
Mass of an electron, \f$9.1093837015\times10^{-31}\,\mathrm{kg}\f$ (CODATA 2018)
*/
const kMassElectron = 9.1093837015e-31;

/**
Combined mass and Newton Gravitational constant for the Sun \f$(GM_\odot)\f$, \f$1.3271244\times10^{20}\,\mathrm{N}\,\mathrm{kg}^{-2}\,\mathrm{m}^2\f$ (IAU Resolution B3 2015)
*/
const kGMSolar = 1.3271244e20;

/**
Mass of the Sun \f$(M_\odot)\f$, \f$\frac{GM_\odot}{G} \sim 1.99\times10^{30}\,\mathrm{kg}\f$
*/
const kMassSolar = kGMSolar / kGravityNewton;

/**
Combined mass and Newton Gravitational constant for Jupiter \f$(GM_J)\f$, \f$1.2668653\times10^{17}\,\mathrm{N}\,\mathrm{kg}^{-2}\,\mathrm{m}^2\f$ (IAU Resolution B3 2015)
*/
const kGMJupiter = 1.2668653e17;

/**
Mass of Jupiter \f$(M_J)\f$, \f$\frac{GM_J}{G} \sim 1.898\times10^{27}\,\mathrm{kg}\f$
*/
const kMassJupiter = kGMJupiter / kGravityNewton;

/**
Polar radius of Jupiter, \f$(R_{\mathrm{pJ}})\f$ \f$6.6854\times10^{7}\,\mathrm{m}\f$ (IAU Resolution B3 2015)
*/
const kRadiusJupiterPolar = 6.6854e7;

/**
Equatorial radius of Jupiter \f$(R_{\mathrm{eJ}})\f$ \f$7.1492\times10^{7}\,\mathrm{m}\f$ (IAU Resolution B3 2015)
*/
const kRadiusJupiterEquatorial = 7.1492e7;

/**
Volumetric average radius of Jupiter \f$(R_{\mathrm{J}})\f$ \f$(R_{\mathrm{pJ}}R_{\mathrm{eJ}}^2)^{\frac{1}{3}} \sim 6.991\times10^{7}\,\mathrm{m}\f$
*/
const kRadiusJupiter = Math.pow(kRadiusJupiterPolar * kRadiusJupiterEquatorial * kRadiusJupiterEquatorial,1.0/3.0); // average radius for volume, m

/**
Combined mass and Newton Gravitational constant for Earth \f$(GM_\oplus)\f$, \f$3.986004\times10^{14}\,\mathrm{N}\,\mathrm{kg}^{-2}\,\mathrm{m}^2\f$ (IAU Resolution B3 2015)
*/
const kGMEarth = 3.986004e14;

/**
Mass of Earth \f$(M_\oplus)\f$, \f$\frac{GM_\oplus}{G} \sim 5.972\times10^{24}\,\mathrm{kg}\f$
*/
const kMassEarth = kGMEarth / kGravityNewton;

/**
Polar radius of Earth, \f$(R_{\mathrm{p}\oplus})\f$ \f$6.3568\times10^{6}\,\mathrm{m}\f$ (IAU Resolution B3 2015)
*/
const kRadiusEarthPolar = 6.3568e6;

/**
Equatorial radius of Earth, \f$(R_{\mathrm{e}\oplus})\f$ \f$6.3781\times10^{6}\,\mathrm{m}\f$ (IAU Resolution B3 2015)
*/
const kRadiusEarthEquatorial = 6.3781e6; // m  (IAU Resolution B3 2015)

/**
Volumetric average radius of Earth \f$(R_{\oplus})\f$ \f$(R_{\mathrm{p}\oplus}R_{\mathrm{e}\oplus}^2)^{\frac{1}{3}} \sim 6.371\times10^{6}\,\mathrm{m}\f$
*/
const kRadiusEarth = Math.pow(kRadiusEarthPolar * kRadiusEarthEquatorial * kRadiusEarthEquatorial,1.0/3.0); // average radius for volume, m

/**
Gravitational acceleration near the surface of Earth, \f$ \frac{GM_\oplus}{R^2_\oplus} \simeq 9.8\,\mathrm{m}\,\mathrm{s}^{-2} \f$
*/
const kGravityEarth = kGMEarth / (kRadiusEarth * kRadiusEarth);

/**
Parsec, the distance to an object with parallax of one arc-second \f$\mathrm{au} \frac{3600"}{1^\circ} \frac{180^\circ}{\pi} \simeq 3.086\times10^{16}\,\mathrm{m}\f$
*/
const kParsec = kAstronomicalUnit * 648000.0 / Math.PI;

/**
a Megaparsec (\f$10^6\f$ parsec)
*/
const kMegaparsec = kParsec * 1.0e6; // 1 Mpc in m

/**
a Gigaparsec (\f$10^9\f$ parsec)
*/
const kGigaparsec = kParsec * 1.0e9; // 1 Gpc in m

/**
Dimensionless Hubble parameter (h) \f$0.6766\f$ (Planck 2018)
*/
const kH0h = 0.6766;

/**
Standard Hubble parameter \f$(H_{0,\mathrm{std}})\f$, based on \f$100\,\mathrm{km}\,\mathrm{s}^{-1}\,\mathrm{Mpc}^{-1} \simeq 3.24\times10^{-12}\,\mathrm{s}^{-1}\f$
*/
const kH0std = 100.0e3 / (kMegaparsec);

/**
Hubble parameter \f$H_0 = h h_{0,\mathrm{std}} \simeq = 2.19\times10^{-12}\,\mathrm{s}^{-1}\f$
*/
const kH0 = kH0std * kH0h;

/**
a light-year (the distance light travels in one year. \f$ c y \simeq 3.94\times10^{18}\,\mathrm{m} \f$
*/
const kLightYear = kYear * kSpeedLight;

/**
Planck's constant times the speed of light (hc) \f$ hc \simeq 2.00\times10^{-26}\,\mathrm{J}\,\mathrm{m} \f$
*/
const khc = kPlanck * kSpeedLight; // 

/**
Coulomb constant \f$k_e\f$ \f$ 10^{-7} c^2 \simeq 8.99\times10^9\,\mathrm{N}\,\mathrm{C}^{-2}\,\mathrm{m}^2 \f$
*/
const kCoulomb = kSpeedLight * kSpeedLight * 1.0e-7; // coulomb constant
/**
Vacuum Permeability \f$\,\mathrm{m}u_0\f$ \f$ \frac{1}{c^2 \varepsilon_0} \simeq 4\pi\times10^{-7} \,\mathrm{N}\,\mathrm{A}^{-2} \f$
*/
const kVacuumPermeability = 1.0 / (kSpeedLight * kSpeedLight * kVacuumPermittivity);

/**
Radiation Density (\f$a\f$) \f$ \frac{8\pi^5k_B^4}{15 h^3 c^3} \simeq 7.57\times10^{-16}\,\mathrm{J}\,\mathrm{m}^{-3}\,\mathrm{K}^{-4} \f$
*/
const kRadiationDensity = 8.0 * Math.PI * Math.PI * Math.PI * Math.PI * Math.PI * kBoltzmann * kBoltzmann * kBoltzmann * kBoltzmann / (15.0 * khc * khc * khc);

/**
Stefan-Boltzmann constant (\f$\sigma_{\mathrm{SB}}\f$) \f$ \frac{a c}{4} \simeq 5.67\times10^{-8}\,\mathrm{W}\,\mathrm{m}^{-2}\,\mathrm{K}^{-4} \f$
*/
const kStefanBoltzman = kRadiationDensity * kSpeedLight * 0.25;////cgs

/**
Wein displacement constant (\f$b\f$) \f$ \frac{hc}{4.965114231} \simeq 2.897\times10^{-3}\,\mathrm{W}\,\mathrm{m}\,\mathrm{K} \f$
*/
const kWein = khc / kBoltzmann / 4.965114231;// m

/**
Boltzmann constant in eV (\f$k_b\f$) \f$ \frac{k_b}{q_e} \simeq 8.617\times10^{-5}\,\mathrm{eV}\,\mathrm{K} \f$
*/
const kBoltzmann_eV = kBoltzmann / kChargeFundamental; // eV/K 

/**
Reduced Planck constant (\f$\hbar\f$) \f$ \frac{h}{2\pi} \simeq 1.054\times10^{-34}\,\mathrm{J}\,\mathrm{s} \f$
*/
const kPlanckReduced = kPlanck / (2.0 * Math.PI); // J s //@@

/**
Planck constant in eV (\f$h\f$) \f$ \frac{h}{q_e} \simeq 4.136\times10^{-15}\,\mathrm{eV}\,\mathrm{s} \f$
*/
const kPlanck_eV = kPlanck / kChargeFundamental;// eV s 

/**
Reduced Planck constant in eV (\f$\hbar\f$) \f$ \frac{\hbar}{q_e} \simeq 6.582\times10^{-16}\,\mathrm{eV}\,\mathrm{s} \f$
*/
const kPlanckReduced_eV = kPlanckReduced / kChargeFundamental;// eV s

/**
hc in eV-nm (\f$\hbar\f$) \f$ \frac{hc}{q_e} \simeq 1.24\times10^{2}\,\mathrm{eV}\,\mathrm{m}[n] \f$
*/
const khc_eVnm = kPlanck_eV * kSpeedLight * 1e9;//eV nm

/**
Fine structure constant (\f$\alpha\f$) \f$ \frac{k_e q_e^2}{2\pi h c} \simeq 7.297\times10^{-3} \f$
*/
const kFineStructure = kCoulomb * kChargeFundamental * kChargeFundamental / (khc) * 2.0 * Math.PI;

/**
Bohr radius (\f$a_0\f$) \f$ \frac{\hbar^2}{k_e q_e^2 m_e} \simeq 5.292\times10^{-11}\,\mathrm{m} \f$
*/
const kRadiusBohr = kPlanckReduced * kPlanckReduced / (kCoulomb * kMassElectron * kChargeFundamental * kChargeFundamental); // m

/**
Rydberg constant \f$(R_\infty)\f$ \f$ \frac{m_e q_e^4}{8\varepsilon_0^2 h^2} \simeq 1.097\times10^{7}\,\mathrm{m}^{-1} \f$
*/
const kRydbergConstant = (kMassElectron * kChargeFundamental * kChargeFundamental * kChargeFundamental * kChargeFundamental) / (8.0 * kVacuumPermittivity * kVacuumPermittivity * kPlanck * kPlanck * kPlanck * kSpeedLight);

/**
Rydberg energy (Ry) \f$ hcR_\infty \simeq 2.180\times10^{-18}\,\mathrm{J} \f$
*/
const kRydberg = (kMassElectron * kChargeFundamental * kChargeFundamental * kChargeFundamental * kChargeFundamental) / (8.0 * kVacuumPermittivity * kVacuumPermittivity * kPlanck * kPlanck);

/**
Rydberg energy  in eV (Ry) \f$ \frac{hcR_\infty}{q_e} \simeq 13.605\,\mathrm{eV} \f$
*/
const kRydberg_eV = kRydberg / kChargeFundamental;

/**
Mass of Hydrogen \f$ m_e + m_p - \frac{hcR_\infty}{c^2}\frac{m_p}{m_p + m_e} \simeq 1.673\times10^{-27}\,\mathrm{kg} \f$
*/
const kMassHydrogen = kMassElectron + kMassProton - kRydberg / (kSpeedLight * kSpeedLight) * kMassProton / (kMassProton + kMassElectron);

/**
Thomson cross-section of an electron \f$(\sigma_{T,e})\f$,  \f$ \frac{\pi q_e^4 }{3 m_e^2} \simeq 6.652\times10^{-29}\,\mathrm{m}^2 \f$
*/
const kCrossSectionThomsonElectron = (kChargeFundamental * kChargeFundamental / kMassElectron)**2 * 8.0e-14 * Math.acos(0.5); //Math.PI / 3.0;

/**
Thomson cross-section of a proton \f$(\sigma_{T,p})\f$,  \f$ \frac{\pi q_e^4 }{3 m_p^2} \simeq 1.973\times10^{-35}\,\mathrm{m}^2 \f$
*/
const kCrossSectionThomsonProton = kChargeFundamental * kChargeFundamental * kChargeFundamental * kChargeFundamental / (kMassProton * kMassProton) * 8.0e-14 * Math.PI / 3.0;

