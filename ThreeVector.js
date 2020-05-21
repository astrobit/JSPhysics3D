/** 
@brief A javascript implementation of a 3-dimensional vector
@details 
@author Brian W. Mulligan
@version 1.0.0
@date May 2020
@copyright MIT License
*/

class ThreeVector
{
/** 
ThreeVector constructor
@param x The x component or a ThreeVector 
@param y The y component, ignored if x is a ThreeVector
@param z The z component, ignored if x is a ThreeVector
*/
	constructor(x,y,z)
	{
		if (x != null && x instanceof ThreeVector)
		{
			this._x = t._x;
			this._y = t._y;
			this._z = t._z;
		}
		else 
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
	}
/** 
Get for the x component
@returns The x component
*/
	get x() {return this._x;}
/** 
Get for the y component
@returns The y component
*/
	get y() {return this._y;}
/** 
Get for the z component
@returns The z component
*/
	get z() {return this._z;}

/** 
Set for the x component
@param value The new value for the x component
@returns none
*/
	set x(value) {this._x = value;}
/** 
Set for the z component
@param value The new value for the y component
@returns none
*/
	set y(value) {this._y = value;}
/** 
Set for the y component
@param value The new value for the z component
@returns none
*/
	set z(value) {this._z = value;}

/** 
Add one vector to another: \f$\vec{a} + \vec{b} = <a_x + b_x,a_y + b_y, a_z + b_z>\f$.
@param vectB the vector to add to this vector.
@returns a ThreeVector with the result of the addition.
*/
	add(vectB)
	{
		return new ThreeVector(this._x + vectB.x,this._y + vectB.y,this._z + vectB.z);
	}
/** 
Create the additive inverse of a vector: \f$-\vec{a} = <-a_x,-a_y,-a_z>\f$
@returns a ThreeVector containing the additive inverse of this vector.
*/
	negate()
	{
		return new ThreeVector(-this._x,-this._y,-this._z);
	}
/** 
Subtract one vector from another: \f$\vec{a} - \vec{b} = <a_x - b_x,a_y - b_y, a_z - b_z>\f$.
@param vectB the vector to subtract from this vector.
@returns a ThreeVector with the result of the subtraction.
*/
	subtract(vectB)
	{
		return this.add(vectB.negate());
	}
/** 
Scale the vector by a scalar factor: \f$s\vec{a} = <s x, s y, s z>\f$.
@param scalar the factor by which to scale the vector
@returns the scaled ThreeVector 
*/
	scale(scalar)
	{
		return new ThreeVector(this._x * scalar,this._y * scalar,this._z * scalar);
	}
/** 
Divide the vector by a scalar factor: \f$\dfrac{1}{s}\vec{a} = <\dfrac{x}{s}, \dfrac{y}{s}, \dfrac{z}{s}>\f$.
@param scalar the factor by which to divide the vector
@returns the scaled ThreeVector 
*/
	divide(scalar)
	{
		return this.scale(1.0 / scalar);
	}
/** 
Retrieve a scalar (dot) product for this vector: \f$\vec{a}\bullet\vec{b} = a_x b_x + a_y b_y + a_z b_z\f$
@returns the dot product 
*/
	dot(vectB)
	{
		return this._x * vectB.x + this._y * vectB.y + this._z * vectB.z;
	}
/** 
Retrieve a vector (cross) product for this vector: \f$\vec{a}\times\vec{b} = <a_yb_z - a_zb_y,a_zb_x - a_xb_z,a_xb_y - a_yb_x>\f$
@returns the cross product as a ThreeVector
*/
	cross(vectB)
	{
		return new ThreeVector(this._y * vectB.z - this._z * vectB.y, this._z * vectB.x - this._x * vectB.z, this._x * vectB.y - this._y * vectB.x);
	}
/** 
Get the magnitude (length) of the vector
@returns the magnitude of the vector \f$(\sqrt{x^2 + y^2 + z^2})\f$
*/
	magnitude()
	{
		return Math.sqrt(this.dot(this));
	}
	
/** 
Retrieve a unit vector for this vector
@returns the unit vector \f$(\dfrac{1}{\sqrt{x^2 + y^2 + z^2}})<x,y,z>\f$
*/
	unit()
	{
		var mag = this.magnitude();
		if (mag != 0.0)
			mag = 1.0 / mag;
		return new ThreeVector(this._x * mag,this._y * mag,this._z * mag);
	}
	/**
Load the vector with a zero vector
@returns none
*/
	loadZero()
	{
		this._x = this._y = this._z = 0.0;
	}
/**
Load the vector with a unit vector in the x direction
@returns none
*/
	loadUnitX()
	{
		this._x = 1.0;
		this._y = this._z = 0.0;
	}
/**
Load the vector with a unit vector in the y direction
@returns none
*/
	loadUnitY()
	{
		this._y = 1.0;
		this._x = this._z = 0.0;
	}
/**
Load the vector with a unit vector in the z direction
@returns none
*/
	loadUnitZ()
	{
		this._z = 1.0;
		this._x = this._y = 0.0;
	}
}

