#pragma strict
#pragma implicit
#pragma downcast
 
var scrollSpeedX = 0.5;
var scrollSpeedY = 0.5;
var materialID = 0;
var updateRate = 0.05;

enum TextureType { _MainTex, _BumpMap, _LightMap, _Cube, _ParticleTexture };
var Type = TextureType._MainTex;

private var materials : Material[]; 
private var rate = 0.05;
private var nextUpdate : float;

private var currentTime : float;

private var offset : Vector2;
private var typeStr : String;

function Awake()
{
	enabled = false;
	typeStr += Type;
}

function Update()
{
	if(Time.time > nextUpdate)
	{		
		currentTime = Time.time;		
		nextUpdate = currentTime + updateRate;
		
		offset.x = Mathf.Repeat(currentTime * scrollSpeedX, 1);		
		offset.y = Mathf.Repeat(currentTime * scrollSpeedY, 1);	
		
		renderer.materials[materialID].SetTextureOffset(typeStr, offset);
	}
}

function OnBecameVisible ()
{
	enabled = true;
}

function OnBecameInvisible ()
{
	enabled = false;
}