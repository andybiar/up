// Scroll main texture based on time

//@script ExecuteInEditMode

var scrollSpeed = 0.1;

function Update () 
{
	//if(renderer.material.shader.isSupported)
	//	Camera.main.depthTextureMode |= DepthTextureMode.Depth;
	 
    var offset = Time.time * scrollSpeed;
    renderer.material.SetTextureOffset ("_BumpMap", Vector2(0, offset)); //offset/-7.0
    
    renderer.material.SetTextureOffset ("_MainTex", Vector2(0, offset)); // offset/10.0
    
    renderer.material.color.a = .75;
}