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
		this._lastForce = new FourVector();
		
		this._lastAccel = new FourVector();
//		console.log("initialized momentum " + this._fourMomentum.t + " " + this._fourMomentum.x + " " + this._fourMomentum.y + " " + this._fourMomentum.z);
//		console.log("initialized pos " + this._positionData.t + " " + this._positionData.x + " " + this._positionData.y + " " + this._positionData.z);
	}


	get position() {return this._positionData;}
	set position(value)
	{
		this.setPosition(value);
	}
	
	get t() {return this._positionData.t;}
	get x() {return this._positionData.x;}
	get y() {return this._positionData.y;}
	get z() {return this._positionData.z;}
	
	get vt() {return kSpeedLight;}
	get vx() {return kSpeedLight * this._fourMomentum.x / this._fourMomentum.t;}
	get vy() {return kSpeedLight * this._fourMomentum.y / this._fourMomentum.t;}
	get vz() {return kSpeedLight * this._fourMomentum.z / this._fourMomentum.t;}
	
	get velocity()
	{
		return new FourVector(kSpeedLight,
								kSpeedLight * this._fourMomentum.x / this._fourMomentum.t,
								kSpeedLight * this._fourMomentum.y / this._fourMomentum.t,
								kSpeedLight * this._fourMomentum.z / this._fourMomentum.t
								);
	}

	get at() {return this._lastAccel.t;}
	get ax() {return this._lastAccel.x;}
	get ay() {return this._lastAccel.y;}
	get az() {return this._lastAccel.z;}
	
	get acceleration()
	{
		return new FourVector(this._lastAccel);
	}
	
	get pt() {return this._fourMomentum.t;}
	get px() {return this._fourMomentum.x;}
	get py() {return this._fourMomentum.y;}
	get pz() {return this._fourMomentum.z;}
	get momentum() {return new FourVector(this._fourMomentum);}
	set momentum(value)
	{
		this.setMomentum(value);
	}
	
	get mass()
	{
		return Math.sqrt(this._fourMomentum.t * this._fourMomentum.t - this._fourMomentum.x * this._fourMomentum.x - this._fourMomentum.y * this._fourMomentum.y - this._fourMomentum.z * this._fourMomentum.z);
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
		var vel = this.velocity;
//		console.log("update vel " + vel.t + " " + vel.x + " " + vel.y + " " + vel.z);
		
		this._fourMomentum = this._fourMomentum.add(this._netForce.scale(timestep / kSpeedLight));
//		console.log("update momentum " + this._fourMomentum.t + " " + this._fourMomentum.x + " " + this._fourMomentum.y + " " + this._fourMomentum.z);
		this._positionData = this._positionData.add(vel.scale(timestep).add(accel.scale(0.5*timestep*timestep)));
//		console.log("update pos " + this._positionData.t + " " + this._positionData.x + " " + this._positionData.y + " " + this._positionData.z);
		this._lastAccel = new FourVector(accel);
		this._lastForce = new FourVector(this._netForce);		
		this._netForce.loadZero(); // clear forces
	}
}
