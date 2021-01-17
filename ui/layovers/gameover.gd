extends CanvasLayer

onready var resume = $resume
onready var exit = $exit
onready var player = global.player

func _ready():
	sfx.set_music("dungeon", "quiet")
	sfx.gameover = true
	yield(get_tree().create_timer(2.5), "timeout")
	resume.show()
	yield(get_tree().create_timer(0.25), "timeout")
	exit.show()
	yield(get_tree().create_timer(0.25), "timeout")
	resume.grab_focus()
	
func _input(event):
	if Input.is_action_just_pressed("UP"):
		if resume.is_visible():
			sfx.play("item_select")
			resume.grab_focus()
	if Input.is_action_just_pressed("DOWN"):
		if exit.is_visible():
			sfx.play("item_select")
			exit.grab_focus()
	
func _on_resume_pressed():
	sfx.play("sword3")
	resume.release_focus()
	player.set_hurt_texture(false)
	yield(get_tree().create_timer(0.75), "timeout")
	self.queue_free()
	screenfx.play("fadeblackout")
	sfx.gameover = false
	sfx.set_music(player.current_zone.music, "default")
	player.show()
	player.state = "default"
	

func _on_exit_pressed():
	sfx.play("denied")
	get_tree().change_scene("res://engine/main.tscn")
