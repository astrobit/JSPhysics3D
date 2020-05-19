/** 
@brief A javascript implementation of a 3-dimensional vector
@details 
@author Brian W. Mulligan
@version 1.0.0
@date May 2020
@copyright MIT License
*/

class TwoVector
{
/** 
TwoVector constructor
@param x The x component
@param y The y component
*/
	constructor(x,y)
	{
		if (x != null)
			this._x = x;
		else
			this._x = 0;
		if (y != null)
			this._y = y;
		else
			this._y = 0;
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
Set for the x component
@param value The new value for the x component
@returns none
*/
	set x(value) {this._x = value;}
/** 
Set for the y component
@param value The new value for the y component
@returns none
*/
	set y(value) {this._y = value;}
/** 
Add one vector to another: \f$\vec{a} + \vec{b} = <a_x + b_x,a_y + b_y>\f$.
@param vectB the vector to add to this vector.
@returns a TwoVector with the result of the addition.
*/
	add(vectB)
	{
		return new TwoVector(this._x + vectB.x,this._y + vectB.y);
	}
/** 
Create the additive inverse of a vector: \f$-\vec{a} = <-a_x,-a_y>\f$
@returns a TwoVector containing the additive inverse of this vector.
*/
	negate()
	{
		return new TwoVector(-this._x,-this._y);
	}
/** 
Subtract one vector from another: \f$\vec{a} - \vec{b} = <a_x - b_x,a_y - b_y>\f$.
@param vectB the vector to subtract from this vector.
@returns a TwoVector with the result of the subtraction.
*/
	subtract(vectB)
	{
		return this.add(vectB.negate());
	}
/** 
Scale the vector by a scalar factor: \f$s\vec{a} = <s x, s y>\f$.
@param scalar the factor by which to scale the vector
@returns the scaled TwoVector 
*/
	scale(scalar)
	{
		return new TwoVector(this._x * scalar,this._y * scalar);
	}
/** 
Divide the vector by a scalar factor: \f$\dfrac{1}{s}\vec{a} = <\dfrac{x}{s}, \dfrac{y}{s}>\f$.
@param scalar the factor by which to divide the vector
@returns the scaled TwoVector 
*/
	divide(scalar)
	{
		return this.scale(1.0 / scalar);
	}
/** 
Retrieve a scalar (dot) product for this vector: \f$\vec{a}\bullet\vec{b} = a_x b_x + a_y b_y\f$
@returns the dot product 
*/
	dot(vectB)
	{
		return this._x * vectB.x + this._y * vectB.y;
	}
/** 
Retrieve a cross product for this vector: \f$\vec{a}\times\vec{b} = a_xb_y - a_yb_x = |a||b|\sin\theta\f$
@returns the cross product as a scalar
*/
	cross(vectB)
	{
		return this._x * vectB.y - this._y * vectB.x;
	}
/** 
Get the magnitude (length) of the vector
@returns the magnitude of the vector \f$(\sqrt{x^2 + y^2})\f$
*/
	magnitude()
	{
		return Math.sqrt(this.dot(this));
	}
	
/** 
Retrieve a unit vector for this vector
@returns the unit vector \f$(\dfrac{1}{\sqrt{x^2 + y^2}})<x,y>\f$
*/
	unit()
	{
		var mag = this.magnitude();
		if (mag != 0.0)
			mag = 1.0 / mag;
		return new TwoVector(this._x * mag,this._y * mag);
	}
	/**
Load the vector with a zero vector
@returns none
*/
	loadZero()
	{
		this._x = this._y = 0.0;
	}
/**
Load the vector with a unit vector in the x direction
@returns none
*/
	loadUnitX()
	{
		this._x = 1.0;
		this._y = 0.0;
	}
/**
Load the vector with a unit vector in the y direction
@returns none
*/
	loadUnitY()
	{
		this._x = 0.0;
		this._y = 1.0;
	}
}

