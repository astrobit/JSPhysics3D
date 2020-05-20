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
