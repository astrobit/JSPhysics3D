

var iFailuresPhysicalConstants = new TestCount();

iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"c",kSpeedLight,2.99792458e8));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_e",kMassElectron,9.108980087382e-31));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_p",kMassProton,1.672547813969e-27));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_h",kMassHydrogen,1.673458687724e-27));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_Sun",kMassSolar,1.9884099e30));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_Earth",kMassEarth,5.972168e24));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_Jupiter",kMassJupiter,1.89812459e27));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"m_AMU",kAMU_kg,1.660465492239e-27));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"q_e",kChargeFundamental,1.602176634e-19));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"r_Bohr",kRadiusBohr,5.29200659e-11));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"au",kAstronomicalUnit,1.495978707e11));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"pc",kParsec,3.085677581e16));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Mpc",kMegaparsec,3.085677581e22));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Gpc",kGigaparsec,3.085677581e25));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"R_sun",kRadiusSolar,6.957e8));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"R_earth",kRadiusEarth,6.370992e6));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"R_jupiter",kRadiusJupiter,6.9911308e7));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"Rydberg",kRydberg,2.17977577e-18));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"L_sun",kLuminositySolar,3.828e26));
iFailuresPhysicalConstants.addEq(testValueAndReport(bSilent_Pass,"k_Coulomb",kCoulomb,8.98755179e9));
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

iFailuresPhysicalConstants.report("Physics Constants");

