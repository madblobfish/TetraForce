extends Entity

class_name Enemy

export var zone = ""
export(bool) var chest_spawn = false
export(String) var location = "room"
export(String) var spawned_by = ""

var spawn_position = home_position

func _ready():
	spawn_position = home_position
	add_to_group("enemy")
	add_to_group("maphost")
	set_collision_layer_bit(0, 0)
	set_collision_mask_bit(0, 0)
	set_collision_layer_bit(1, 1)
	set_collision_mask_bit(1, 1)
	if spawned_by != "":
		set_dead()
		get_parent().get_node(spawned_by).connect("started", self, "spawned")

func _process(delta):
	set_hole_bit(hitstun == 0)

func set_hole_bit(bit):
	set_collision_layer_bit(7, bit)
	set_collision_mask_bit(7, bit)

func check_for_death():
	if health <= 0:
		emit_signal("update_persistent_state")
		network.peer_call(self, "enemy_death", [global_position])
		enemy_death(global_position)

func enemy_death(pos):
	var death_animation = preload("res://effects/enemy_death.tscn").instance()
	death_animation.global_position = pos
	get_parent().add_child(death_animation)
	sfx.play("enemy_death")
	if chest_spawn == true:
		var spawn_node = location #Sets Spawn Node Name
		var spawn_point = get_parent().get_node(spawn_node) #Get Spawn Node
		spawn_point.chest_spawn()
	else:
		network.current_map.spawn_collectable("tetran", pos, 4)
		
	set_dead()

func set_health(value):
	health = value
	if health <= 0:
		set_dead()

func hole_fall():
	set_dead()
	network.peer_call(self, "set_dead")

remote func set_dead():
	hide()
	set_physics_process(false)
	home_position = Vector2(0,0)
	pos = Vector2(0,0)
	position = Vector2(0,0)
	health = -1
	
func spawned():
	show()
	set_physics_process(true)
	home_position = spawn_position
	pos = home_position
	position = home_position
	health = MAX_HEALTH
	var death_animation = preload("res://effects/enemy_death.tscn").instance()
	death_animation.global_position = position
	get_parent().add_child(death_animation)

func is_dead():
	if health <= 0 && hitstun == 0:
		return true
	return false

func rand_direction():
	var new_direction = randi() % 4 + 1
	match new_direction:
		1:
			return Vector2.LEFT
		2:
			return Vector2.RIGHT
		3:
			return Vector2.UP
		4:
			return Vector2.DOWN
	return Vector2(0, 0)
