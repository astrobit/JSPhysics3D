


function fmod(value,modulo)// perform floating point modulo, returning a number between (-modulo .... modulo)
{
	var val = value / (1.0 * modulo);
	var ret = (val - Math.floor(val));
	if (val < 0)
		ret = ret + 1.0;
	return ret * modulo;
}
function fmodPos(value,modulo) // perform floating point modulo, returning a number that is always positive (0.... modulo)
{
	var val = value / (1.0 * modulo);
	var ret = (val - Math.floor(val));
	if (val < 0)
		ret = ret + 2.0;
	return ret * modulo;
}

function radiansToDegrees(radians)
{
	return radians * 180.0 / Math.PI;
}

function degreesToRadians(degrees)
{
	return degrees / 180.0 * Math.PI;
}

class AngleVector
{
	constructor(alpha, beta, gamma)
	{
		if (alpha != null)
			this._alpha = alpha;
		else
			this._alpha = 0;
		if (beta != null)
			this._beta = beta;
		else
			this._beta = 0;
		if (gamma != null)
			this._gamma = gamma;
		else
			this._gamma = 0;
		fixAngles();
	}
	get alpha() {return this._alpha;}
	get beta() {return this._beta;}
	get gamma() {return this._gamma;}
	
	get alphaDegrees() {return radiansToDegrees(this._alpha);}
	get betaDegrees() {return radiansToDegrees(this._beta);}
	get gammaDegrees() {return radiansToDegrees(this._gamma);}
	function fixAngles()
	{
		this._alpha = fmodPos(this._alpha,2.0 * Math.PI); // 0 ... 2pi
		this._beta = fmodPos(this._beta,Math.PI); // 0 ... pi
		this._gamma = fmodPos(this._gamma,2.0 * Math.PI); // 0 ... 2pi
	}

	set alpha(value) {this._alpha = value; fixAngles(); }
	set beta(value) {this._beta = value;fixAngles();}
	set gamma(value) {this._gamma = value;fixAngles();}

	set alphaDegrees(value) {this._alpha = degreesToRadians(value); fixAngles(); }
	set betaDegrees(value) {this._beta = degreesToRadians(value);fixAngles();}
	set gammaDegrees(value) {this._gamma = degreesToRadians(value);fixAngles();}

	function add(vectB)
	{
		return new Vector(this._alpha + vectB.alpha,this._beta + vectB.beta,this._gamma + vectB.gamma);
	}
	function negate()
	{
		return new Vector(-this._alpha,-this._beta,-this._gamma);
	}
	function subtract(vectB)
	{
		return add(vectB.negate());
	}
	function scale(scalar)
	{
		return new Vector(this._alpha * scalar,this._beta * scalar,this._gamma * scalar);
	}
	function divide(scalar)
	{
		return scale(1.0 / scalar);
	}

//	get rotationMatrix()
//	{
		
}

class Position
{
	constructor(p,v,a)
	{
		if (p != null && typeof(p) == "Vector")
			this._p = new Vector(p.x,p.y,p.z);
		else
			this._p = new Vector();

		if (v != null && typeof(v) == "Vector")
			this._v = new Vector(v.x,v.y,v.z);
		else
			this._v = new Vector();

		if (a != null && typeof(a) == "Vector")
			this._p = new Vector(a.x,a.y,a.z);
		else
			this._p = new Vector();
	}

	function update(timestep,jerk)
	{
		var jerkLcl;
		if (jerk == null || typeof(jerk) != "Vector")
			jerkLcl = new Vector();
		else
			jerkLcl = jerk;
		this._p = this._p._add(this._v.scale(timestep));
		this._p = this._p._add(this._a.scale(0.5 * timestep * timestep));
		this._p = this._p._add(jerkLcl.scale(0.5 * timestep * timestep * timestep / 3.0));
		
		this._v = this._v._add(this._a.scale(timestep));
		this._v = this._v._add(jerkLcl.scale(0.5 * timestep * timestep));
		
		this._a = this._a._add(jerkLcl.scale(timestep));
	}

	get x() {return this._p.x;}
	set x(value) {this._p.x = value;}

	get y() {return this._p.y;}
	set y(value) {this._p.y = value;}

	get z() {return this._p.z;}
	set z(value) {this._p.z = value;}

	get vx() {return this._v.x;}
	set vx(value) {this._v.x = value;}

	get vy() {return this._v.y;}
	set vy(value) {this._v.y = value;}

	get vz() {return this._v.z;}
	set vz(value) {this._v.z = value;}

	get ax() {return this._a.x;}
	set ax(value) {this._a.x = value;}

	get ay() {return this._a.y;}
	set ay(value) {this._a.y = value;}

	set az(value) {this._a.z = value;}
	get az() {return this._a.z;}

	get p() {return this._p;}
	set p(value) {this._p = value;}
	get v() {return this._v;}
	set v(value) {this._v = value;}

	get a() {return this._a;}
	set a(value) {this._a = value;}
}

class Particle
{
	constructor(mass,charge,positionData,rotationData,momentOfInertiaInverse)
	{
		if (mass != null)
			this._mass = mass;
		else
			this._mass = 0.0;
		if (charge != null)
			this._charge = charge;
		else
			this._charge = 0.0;
		if (positionData != null)
			this._positionData = positionData;
		else
			this._positionData = new Position();
		if (rotationData != null)
			this._rotationData = rotationData;
		else
			this._rotationData = new Position();
		if (momentOfInertiaInverse != null)
			this._momentOfInertiaInverse = momentOfInertiaInverse;
		else
		{
			this._momentOfInertiaInverse = new Tensor();
			if (this._mass != 0.0)
			{
				this._momentOfInertiaInverse.setat(0,0,1.0 / this._mass);
				this._momentOfInertiaInverse.setat(1,1,1.0 / this._mass);
				this._momentOfInertiaInverse.setat(2,2,1.0 / this._mass);
			}
			else
			{
				this._momentOfInertiaInverse.setat(0,0,1.0);
				this._momentOfInertiaInverse.setat(1,1,1.0);
				this._momentOfInertiaInverse.setat(2,2,1.0);
			}

		}

	}

	get mass() {return this._mass;}
	set mass(value) {this._mass = value;}

	get charge() {return this._charge;}
	set charge(value) {this._charge = value;}

	get positionData() {return this._positionData;}
	set positionData(value) {this._positionData = value;}

	get rotationData() {return this._rotationData;}
	set rotationData(value) {this._rotationData = value;}

	get momentOfInertiaInverse() {return this._momentOfInertiaInverse;}
	set momentOfInertiaInverse(value) {this._momentOfInertiaInverse = value;}

	get x() {return this._positionData.x;}
	set x(value) {this._positionData.x = value;}

	get y() {return this._positionData.y;}
	set y(value) {this._positionData.y = value;}

	get z() {return this._positionData.z;}
	set z(value) {this._positionData.z = value;}

	get vx() {return this._positionData.vx;}
	set vx(value) {this._positionData.vx = value;}

	get vy() {return this._positionData.vy;}
	set vy(value) {this._positionData.vy = value;}

	get vz() {return this._positionData.vz;}
	set vz(value) {this._positionData.vz = value;}

	get ax() {return this._positionData.ax;}
	set ax(value) {this._positionData.ax = value;}

	get ay() {return this._positionData.ay;}
	set ay(value) {this._positionData.ay = value;}

	get az() {return this._positionData.az;}
	set az(value) {this._positionData.az = value;}

	get p() {return this._positionData.p;}
	set p(value) {this._positionData.p = value;}

	get v() {return this._positionData.v;}
	set v(value) {this._positionData.v = value;}

	get a() {return this._positionData.a;}
	set a(value) {this._positionData.a = value;}

	// the force function determines torques and forces on the particle
	function applyForce(force,location)
	{
		this._positionData.a.add(force.divide(this._mass));
		var torque = location.cross(force);
		this._rotationData.a.add(this._momentOfInertiaInverse.dotVector(torque));
		
	}

	function update(timestep)
	{
		this._positionData.update(timestep);
		this._rotationData.update(timestep);
	}
}

class Universe
{
	constructor()
	{
		this._particles = new Array();
		this._doNewtonianGravity = true;
		this._doEinsteinGravity = false;
		this._doElecricForcesNewtonian = true;
		this._doElecricForcesEinstein = false;
	}
	function addEarthGravity()
	{
		this.particles.push(new Particle(5.9722e24,0.0,new Position(new Vector(0,0,-6.3781e6))));
	}

	function addParticle(particle)
	{
		var ret = this._particles.length();
		this._particles.push(new Particle(particle.mass,particle.charge,particle.positionData,particle.rotationData
	function gravityNewtonian()
	{
		var i,j;
		for (i = 0; i < this._particles.length; i++)
		{
			var force = new Vector(0,0,0);
			for (j = 0; j < this._particles.length; j++)
			{
				if (i != j && (this._particles[i].x != this._particles[j].x || this._particles[i].y != this._particles[j].y || this._particles[i].z != this._particles[j].z))
				{
					var thisposition = this._particles[j].p.subtract(this._particles[i].p);
					var distance = thisposition.magnitude();
					var strength = 6.67430e-11 * this._particles[i].mass * this._particles[j].mass / (distance * distance);
					var ret = thisposition.unit();
					ret.scale(strength);
					force.add(ret);
				}
			}
		}
	}
	function gravityEinstein()
	{
		gravityNewton();
	}
	function electricForcesNewton()
	{
		var i,j;
		for (i = 0; i < this._particles.length; i++)
		{
			var force = new Vector(0,0,0);
			for (j = 0; j < this._particles.length; j++)
			{
				if (i != j && (this._particles[i].x != this._particles[j].x || this._particles[i].y != this._particles[j].y || this._particles[i].z != this._particles[j].z))
				{
					var thisposition = this._particles[j].p.subtract(this._particles[i].p);
					var distance = thisposition.magnitude();
					var strength = 8.9875517923e9 * this._particles[i].charge * this._particles[j].charge / (distance * distance);
					var ret = thisposition.unit();
					ret.scale(strength);
					force.add(ret);
				}
			}
		}
	}
	function electricForcesEinstein()
	{
		electricForcesNewton();
	}
	function update(timestep)
	{
		if (this._doNewtonianGravity)
			gravityNewtonian();
		if (this._doEinsteinGravity)
			gravityEinstein();
		if (this._doElecricForcesNewtonian)
			electricForcesNewton();
		if (this._doElecricForcesEinstein)
			electricForcesEinstein();

	}
	function setGravityOff() { this._doNewtonianGravity = false; this._doEinsteinGravity = false;}
	function setGravityNewton() { this._doNewtonianGravity = true; this._doEinsteinGravity = false;}
	function setGravityEinsten() { this._doNewtonianGravity = false; this._doEinsteinGravity = true;}

	function setElectricOff() { this._doElecricForcesNewtonian = false; this._doElecricForcesEinstein = false;}
	function setElectricNewton() { this._doElecricForcesNewtonian = true; this._doElecricForcesEinstein = false;}
	function setElectricEinsten() { this._doElecricForcesNewtonian = false; this._doElecricForcesEinstein = true;}
}

