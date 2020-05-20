

var iFailuresPhysicalConstants = new TestCount();

iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"c",kSpeedLight,2.99792458e8));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_e",kMassElectron,9.1093837015e-31));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_p",kMassProton,1.672621923e-27));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_h",kMassHydrogen,1.67353284e-27));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_Sun",kMassSolar,1.9884099e30));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_Earth",kMassEarth,5.972168e24));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_Jupiter",kMassJupiter,1.89812459e27));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_AMU",kAMU_kg,1.660465492239e-27));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"q_e",kChargeFundamental,1.602176634e-19));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"r_Bohr",kRadiusBohr,5.29177210903e-11));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"au",kAstronomicalUnit,1.495978707e11));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"pc",kParsec,3.085677581e16));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Mpc",kMegaparsec,3.085677581e22));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Gpc",kGigaparsec,3.085677581e25));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"R_sun",kRadiusSolar,6.957e8));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"R_earth",kRadiusEarth,6.370992e6));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"R_jupiter",kRadiusJupiter,6.9911308e7));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Rydberg",kRydberg,2.1798723611035e-18));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"L_sun",kLuminositySolar,3.828e26));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Coulomb",kCoulomb,8.98755179e9));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Vacuum Permittivity",kVacuumPermittivity,8.8541878128e-12));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Vacuum Permeability",kVacuumPermeability,1.2566370621e-6));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Boltzmann",kBoltzmann,1.380649e-23));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Planck",kPlanck,6.62607015e-34));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Planck Reduced",kPlanckReduced,1.05457182e-34));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Newton's Gravitational Constnat",kGravityNewton,6.67430e-11));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Stefan-Boltzmann",kStefanBoltzman,5.670374e-8));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Radiation Density",kRadiationDensity,7.565733e-16));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Fine Structure", kFineStructure,7.29735257e-3));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Avogadro",kAvogadro,6.02240760e23));

iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"H0",kH0std,3.24077928944e-18));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Age of Universe (H0) (Gy)",1.0e-9 / kH0std / kYear,9.778131308));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Age of Universe (h0) (Gy)",1.0e-9 / kH0 / kYear,13.4685004));

iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"ly",kLightYear,9.4605281688e15));

iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"hc",khc,1.98644582e-25));

iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Wein",kWein,2.897771855e-3));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Thomson Cross Section (electron)",kCrossSectionThomsonElectron,6.6524587321e-29));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Thomson Cross Section (proton)",kCrossSectionThomsonProton,1.97317048235e-35));


/*
const kBoltzmann_eV = kBoltzmann / kChargeFundamental; // eV/K 
const kPlanckReduced = kPlanck / (2.0 * Math.PI); // J s //@@
const kPlanck_eV = kPlanck / kChargeFundamental;// eV s 
const kPlanckReduced_eV = kPlanckReduced / kChargeFundamental;// eV s
const khc_eVnm = kPlanckReduced_eV * kSpeedLight * 1e9;//eV nm
const kH0 = kH0std * kH0h;
const kRydberg_eV = kRydberg / kChargeFundamental;
*/

iFailuresPhysicalConstants.report("Physics Constants");

