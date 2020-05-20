

function radiansToDegrees(radians)
{
	return radians * 180.0 / Math.PI;
}

function degreesToRadians(degrees)
{
	return degrees / 180.0 * Math.PI;
}

const kSpeedLight = 299792458.0;

class Particle
{
	setPosition(value)
	{
		if (value != null && value instanceof FourVector)
		{
			this._positionData._t = value.t;
			this._positionData._x = value.x;
			this._positionData._y = value.y;
			this._positionData._z = value.z;
		}
		else if (value != null && value instanceof ThreeVector)
		{
			this._positionData._t = 0.0;
			this._positionData._x = value.x;
			this._positionData._y = value.y;
			this._positionData._z = value.z;
		}
		else if (value != null && value instanceof TwoVector)
		{
			this._positionData._t = 0.0;
			this._positionData._x = value.x;
			this._positionData._y = value.y;
			this._positionData._z = 0.0;
		}
	}
	setMomentum(value)
	{
		if (value != null && value instanceof FourVector)
		{
			this._fourMomentum._t = value.t;
			this._fourMomentum._x = value.x;
			this._fourMomentum._y = value.y;
			this._fourMomentum._z = value.z;
		}
		else if (value != null && value instanceof ThreeVector)
		{
			var mass = Math.sqrt(this._fourMomentum.dot(this._fourMomentum));
			this._fourMomentum._x = value.x / kSpeedLight;
			this._fourMomentum._y = value.y / kSpeedLight;
			this._fourMomentum._z = value.z / kSpeedLight;
			this._fourMomentum._t = mass * (1 + this._fourMomentum._x * this._fourMomentum._x + this._fourMomentum._y * this._fourMomentum._y + this._fourMomentum._z * this._fourMomentum._z);
		}
		else if (value != null && value instanceof TwoVector)
		{
			var mass = Math.sqrt(this._fourMomentum.dot(this._fourMomentum));
			this._fourMomentum._x = value.x / kSpeedLight;
			this._fourMomentum._y = value.y / kSpeedLight;
			this._fourMomentum._z = 0.0;
			this._fourMomentum._t = mass * (1 + this._fourMomentum._x * this._fourMomentum._x + this._fourMomentum._y * this._fourMomentum._y + this._fourMomentum._z * this._fourMomentum._z);
		}
	}

	constructor(fourMomentum,position)
	{
		this._fourMomentum = new FourVector();
		this._positionData = new FourVector();

		this.setMomentum(fourMomentum);
		this.setPosition(position);
			
		this._netForce = new FourVector();
//		console.log("initialized momentum " + this._fourMomentum.t + " " + this._fourMomentum.x + " " + this._fourMomentum.y + " " + this._fourMomentum.z);
//		console.log("initialized pos " + this._positionData.t + " " + this._positionData.x + " " + this._positionData.y + " " + this._positionData.z);
	}


	get position() {return this._positionData;}
	set position(value)
	{
		this.setPosition(value);
	}

	get momentum() {return this._fourMomentum;}
	set momentum(value)
	{
		this.setMomentum(value);
	}

	// the force function determines torques and forces on the particle
	applyForce(force)
	{
		this._netForce = this._netForce.add(force);
//		var torque = location.cross(force);
//		this._rotationData.a.add(this._momentOfInertiaInverse.dotVector(torque));
		
	}

	update(timestep)
	{
//		console.log("update net force " + this._netForce.t + " " + this._netForce.x + " " + this._netForce.y + " " + this._netForce.z);
		var accel = new FourVector(this._netForce.t  / this._fourMomentum.t,this._netForce.x / this._fourMomentum.t,this._netForce.y / this._fourMomentum.t,this._netForce.z / this._fourMomentum.t);
//		console.log("update accel " + accel.t + " " + accel.x + " " + accel.y + " " + accel.z);
		var vel = new FourVector(kSpeedLight,kSpeedLight * this._fourMomentum.x / this._fourMomentum.t,kSpeedLight * this._fourMomentum.y / this._fourMomentum.t,kSpeedLight * this._fourMomentum.z / this._fourMomentum.t);
//		console.log("update vel " + vel.t + " " + vel.x + " " + vel.y + " " + vel.z);
		
		this._fourMomentum = this._fourMomentum.add(this._netForce.scale(timestep / kSpeedLight));
//		console.log("update momentum " + this._fourMomentum.t + " " + this._fourMomentum.x + " " + this._fourMomentum.y + " " + this._fourMomentum.z);
		this._positionData = this._positionData.add(vel.scale(timestep).add(accel.scale(0.5*timestep*timestep)));
//		console.log("update pos " + this._positionData.t + " " + this._positionData.x + " " + this._positionData.y + " " + this._positionData.z);
		
		this._netForce.loadZero(); // clear forces
	}
}

class Universe
{
	constructor()
	{
		this._particles = new Array();
		this._doGravity = true;
		this._doNewtonianGravity = false;
		this._doConstantGravity = false;
		this._doElecricForces = true;
		this._ConstantGravity = new FourVector(9.8,0,0,-9.8);
	}
	particle(idx)
	{
		var ret = null;
		if (idx >= 0 && idx < this._particles.length)
			ret = this._particles[idx];
		return ret;
	}
	addEarthGravity()
	{
//		this._particles.push(new Particle(new FourVector(5.9722e24,0.0,new Position(new Vector(0,0,-6.3781e6))));
	}
	addSunGravity(position)
	{
//		this._particles.push(new Particle(new FourVector(5.9722e24,0.0,position)));
	}

	addParticleTwo(mass, positionTwo, velocityTwo)
	{
		var ret = this._particles.length;
		var gammaX = 1.0 / Math.sqrt(1.0 - (velocityThree.x / kSpeedLight)**2);
		var gammaY = 1.0 / Math.sqrt(1.0 - (velocityThree.y / kSpeedLight)**2);
		
		var FourMomentum = new FourVector(mass * Math.sqrt(1 + gammaX * gammaX + gammaY * gammaY),
											mass * gammaX,
											mass * gammaY,
											0
											);
		var FourPosition = new FourVector(0,positionThree.x,positionThree.y);		
		
		this._particles.push(new Particle(FourMomentum,FourPosition));
		return ret;
	}

	addParticleThree(mass, positionThree, velocityThree)
	{
		var ret = this._particles.length;
		var gammaX = velocityThree.x / kSpeedLight;
		var gammaY = velocityThree.y / kSpeedLight;
		var gammaZ = velocityThree.z / kSpeedLight;
		if (Math.abs(velocityThree.x / kSpeedLight) > 0.0001)
			gammaX = 1.0 / Math.sqrt(1.0 - (velocityThree.x / kSpeedLight)**2) - 1;
		if (Math.abs(velocityThree.y / kSpeedLight) > 0.0001)
			gammaY = 1.0 / Math.sqrt(1.0 - (velocityThree.y / kSpeedLight)**2) - 1;
		if (Math.abs(velocityThree.z / kSpeedLight) > 0.0001)
			gammaZ = 1.0 / Math.sqrt(1.0 - (velocityThree.z / kSpeedLight)**2) - 1;
		
//		console.log("init " + ret + " gx " + gammaX + " gy " + gammaY + " gz " + gammaZ);
		var FourMomentum = new FourVector(mass * Math.sqrt(1 + gammaX * gammaX + gammaY * gammaY + gammaZ * gammaZ),
											mass * gammaX,
											mass * gammaY,
											mass * gammaZ
											);
		var FourPosition = new FourVector(0,positionThree.x,positionThree.y,positionThree.z);		
		
		this._particles.push(new Particle(FourMomentum,FourPosition));
		return ret;
	}
	
	addParticleThreeMomentum(mass,momentumThree, positionThree)
	{
		var ret = this._particles.length;
		
		var FourMomentum = new FourVector(particle.mass * Math.sqrt(1 + gammaX * gammaX + gammaY * gammaY + gammaZ * gammaZ),
											momentumThree.x,
											momentumThree.y,
											momentumThree.z
											);
		var FourPosition = new FourVector(0,positionThree.x,positionThree.y,positionThree.z);		
		
		this._particles.push(new Particle(FourMomentum,FourPosition));
		return ret;
	}
	addParticleFourMomentum(momentumFour, positionFour)
	{
		var ret = this._particles.length;
		this._particles.push(new Particle(momentumFour,positionFour));
		return ret;
	}

	gravity()
	{
		var i,j;
		for (i = 0; i < this._particles.length; i++)
		{
			if (this._doConstantGravity)
			{
				var mass;
				if (this._doNewtonianGravity)
					mass = Math.sqrt(this._particles[i].magnitude()); // rest mass
				else
					mass = this._particles[i]._fourMomentum.t;// relativistic mass
				//console.log("gravity const " + i + " "  + this._ConstantGravity.scale(mass).t + " " + this._ConstantGravity.scale(mass).x + " " + this._ConstantGravity.scale(mass).y + " " + this._ConstantGravity.scale(mass).z)
				this._particles[i].applyForce(this._ConstantGravity.scale(mass));
			}
			else
			{
				var jlimit = Math.ceil(this._particles.length * 0.5);
				for (j = 0; j < jlimit; j++)
				{
					if (i != j && (this._particles[i].x != this._particles[j].x || this._particles[i].y != this._particles[j].y || this._particles[i].z != this._particles[j].z))
					{
						var thisposition = this._particles[j].p.subtract(this._particles[i].p);
						var distance = thisposition.magnitude();
						var invDistance = 1.0 / distance;
						var massProduct;
						if (this._doNewtonianGravity)
							massProduct = Math.sqrt(this._particles[i].magnitude()) * Math.sqrt(this._particles[j].magnitude());
						else
							massProduct = this._particles[i]._fourMomentum.t * this._particles[j]._fourMomentum.t;
						var strength = -6.67430e-11 * massProduct / (distance * distance);
						
						var thisForce = new FourVector(strength,strength * thisposition.x * invDistance,strength * thisposition.y * invDistance,strength * thisposition.z * invDistance);
						this._particles[i].applyForce(thisForce);
						this._particles[j].applyForce(thisForce.negate());
					}
				}
			}
		}
	}

	update(timestep)
	{
		if (this._doGravity)
			this.gravity();
		for (i = 0; i < this._particles.length; i++)
		{
			this._particles[i].update(timestep);
		}
	}
	setGravityOff() { this._doGravity = false;}
	setGravityNewton() { this._doGravity = true; this._doNewtonianGravity = true;this._doConstantGravity = false;}
	setGravityEinsten() { this._doGravity = true; this._doNewtonianGravity = false;this._doConstantGravity = false;}
	setGravityConstant(strength,direction)
	{
		this._doGravity = true; 
		this._doNewtonianGravity = false;
		this._doConstantGravity = true;
		if (direction instanceof FourVector || direction instanceof ThreeVector)
		{
			this._ConstantGravity = new FourVector(strength,strength * direction.x,strength * direction.y,strength * direction.z);
		}
		else if (direction instanceof TwoVector)
		{
			this._ConstantGravity = new FourVector(strength,strength * direction.x,strength * direction.y,0.0);
		}
	}
}

