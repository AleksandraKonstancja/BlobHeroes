


var blobMainGeometry =  new THREE.LatheGeometry( [new THREE.Vector2(0, 3), new THREE.Vector2( 2.5, 3.5), new THREE.Vector2(3.5, 4), new THREE.Vector2(5.5, 5.5), new THREE.Vector2(6.5, 7.5),new THREE.Vector2(6, 9),new THREE.Vector2(5.5,9.5), new THREE.Vector2(0, 9.3)],12,0,6.2831);
var blobMainMaterial = new THREE.MeshPhongMaterial( { color: 0xf2003c,  transparent: true, opacity: 0.8 } );
var blobMain = new THREE.Mesh( blobMainGeometry, blobMainMaterial );
blobMain.rotation.x += Math.PI;
// move the body so that the pivot is under the blob
blobMain.position.y +=9.5;  //9.5

var blobEyesGeometry = new THREE.SphereGeometry(0.7, 8, 8);
var blobEyesMaterial = new THREE.MeshPhongMaterial( { color: 0x000000, transparent: true, opacity: 0.8 } );

var blobEye1 = new THREE.Mesh( blobEyesGeometry, blobEyesMaterial );
var blobEye2 = blobEye1.clone();
blobEye1.position.set(-2.2,3.5,5);   // 3.5
blobEye2.position.set(2.2,3.5,5);  // 3.5

var blobBubbleGeometry = new THREE.SphereGeometry(1, 8, 8);
var blobBubble = new THREE.Mesh( blobBubbleGeometry, blobMainMaterial );
blobBubble.position.x -=6.5;
blobBubble.position.y +=8.5;   //8.5
	
// stores all blob parts and sets pivot to the bottom of the blob instead of center
var blobBody = new THREE.Mesh();


blobBody.add(blobMain);
blobBody.add(blobEye1);
blobBody.add(blobEye2);
blobBody.add(blobBubble);





/*function prepareToJump(){
	if (blob.scale.y > 1.5 || blob.scale.y < 0.5 ) { resize = -resize}
	if (blob.position.x==0)	{blob.scale.y+= resize};	
	
}*/