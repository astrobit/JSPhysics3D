
class Vector
{
	constructor(x,y,z)
	{
		if (x != null)
			this._x = x;
		else
			this._x = 0;
		if (y != null)
			this._y = y;
		else
			this._y = 0;
		if (z != null)
			this._z = z;
		else
			this._z = 0;
	}
	get x() {return this._x;}
	get y() {return this._y;}
	get z() {return this._z;}

	set x(value) {this._x = value;}
	set y(value) {this._y = value;}
	set z(value) {this._z = value;}

	function add(vectB)
	{
		return new Vector(this._x + vectB.x,this._y + vectB.y,this._z + vectB.z);
	}
	function negate()
	{
		return new Vector(-this._x,-this._y,-this._z);
	}
	function substract(vectB)
	{
		add(vectB.negate());
	}
	function scale(scalar)
	{
		return new Vector(this._x * scalar,this._y * scalar,this._z * scalar);
	}
	function divide(scalar)
	{
		scale(1.0 / scalar);
	}
	function dot(vectB)
	{
		return this._x * vectB.x + this._y * vectB.y + this._z * vectB.z;
	}
	function cross(vectB)
	{
		return new Vector(this._y * vectB.z - this._z * vectB.y, this._z * vectB.x - this._x * vectB.z, this._x * vectB.y - this._y * vectB.x);
	}
}
class PData
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

class Thing
{
	constructor(pdata,mass,charge)
	{
		this._mass = mass;
		this._charge = charge;
		this._pdata = pdata;
	}

	get mass() {return this._mass;}
	set mass(value) {this._mass = value;}

	get charge() {return this._charge;}
	set charge(value) {this._charge = value;}

	get pdata() {return this._charge;}
	set pdata(value) {this._charge = value;}

	get x() {return this._pdata.x;}
	set x(value) {this._pdata.x = value;}

	get y() {return this._pdata.y;}
	set y(value) {this._pdata.y = value;}

	get z() {return this._pdata.z;}
	set z(value) {this._pdata.z = value;}

	get vx() {return this._pdata.vx;}
	set vx(value) {this._pdata.vx = value;}

	get vy() {return this._pdata.vy;}
	set vy(value) {this._pdata.vy = value;}

	get vz() {return this._pdata.vz;}
	set vz(value) {this._pdata.vz = value;}

	get ax() {return this._pdata.ax;}
	set ax(value) {this._pdata.ax = value;}

	get ay() {return this._pdata.ay;}
	set ay(value) {this._pdata.ay = value;}

	get az() {return this._pdata.az;}
	set az(value) {this._pdata.az = value;}

	get p() {return this._pdata.p;}
	set p(value) {this._pdata.p = value;}

	get v() {return this._pdata.v;}
	set v(value) {this._pdata.v = value;}

	get a() {return this._pdata.a;}
	set a(value) {this._pdata.a = value;}
}

class Universe
{
	constructor()
	{
		this._things = new Array();
	}
}
// JavaScript source code
