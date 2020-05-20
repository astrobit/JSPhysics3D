
var physicsFailures = new TestCount();

var universe = new Universe();
universe.setGravityConstant(9.8,new ThreeVector(0,0,-1));
var partOne = universe.addParticleThree(1,new ThreeVector(0,0,0),new ThreeVector(0,0,0));
var partTwo = universe.addParticleThree(1,new ThreeVector(1,0,0),new ThreeVector(0,0,1));
var partThree = universe.addParticleThree(1,new ThreeVector(2,0,0),new ThreeVector(0,1,0));
var partFour = universe.addParticleThree(1,new ThreeVector(3,0,0),new ThreeVector(1,0,0));
var m;
for (m = 0; m < 100; m++)
{
//	universe.gravity();
	universe.update(0.01);
	var t = (m + 1) * 0.01;
	physicsFailures.addEq(testValueAndReport(bSilent_Pass,"constant gravity @ " + t,universe.particle(partOne).position.z,(-0.5 * 9.8 * t * t)));
	physicsFailures.addEq(testValueAndReport(bSilent_Pass,"constant gravity with v0 = 1 @ " + t,universe.particle(partTwo).position.z,((1.0 - 0.5 * 9.8 * t) * t)));
	physicsFailures.addEq(testValueAndReport(bSilent_Pass,"constant gravity v = (0,1,0) z@ " + t,universe.particle(partThree).position.z,(-0.5 * 9.8 * t * t)));
	physicsFailures.addEq(testValueAndReport(bSilent_Pass,"constant gravity v = (0,1,0) y@ " + t,universe.particle(partThree).position.y,(1 * t)));
	physicsFailures.addEq(testValueAndReport(bSilent_Pass,"constant gravity v = (1,0,0) z@ " + t,universe.particle(partFour).position.z,(-0.5 * 9.8 * t * t)));
	physicsFailures.addEq(testValueAndReport(bSilent_Pass,"constant gravity v = (1,0,0) x@ " + t,universe.particle(partFour).position.x,(3 + 1 * t)));
	
//	console.log(((m + 1) * 0.01) + " " + universe.particle(partOne).position.z + " " + (-0.5 * 9.8 * ((m + 1) * 0.01) * ((m + 1) * 0.01)));
}

physicsFailures.report("Physics");
