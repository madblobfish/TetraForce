<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.6.0" name="objects" tilewidth="16" tileheight="22" tilecount="37" columns="0">
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="0">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="location" value=""/>
   <property name="path" value="res://entities/enemies/stalfos/stalfos.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/stalfos.png"/>
 </tile>
 <tile id="1">
  <properties>
   <property name="entrance" value=""/>
   <property name="map" value=""/>
   <property name="path" value="res://tiles/exit.tscn"/>
   <property name="player_position" value=""/>
  </properties>
  <image width="16" height="16" source="images/objects/exit.png"/>
 </tile>
 <tile id="2">
  <properties>
   <property name="path" value="res://tiles/block.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/block.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="3">
  <properties>
   <property name="path" value="res://tiles/decor/flower_white.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/flower_white.png"/>
 </tile>
 <tile id="4">
  <properties>
   <property name="path" value="res://tiles/decor/flower_blue.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/flower_blue.png"/>
 </tile>
 <tile id="5">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="color" value="green"/>
   <property name="location" value=""/>
   <property name="path" value="res://entities/enemies/slime/slime.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/greenslime.png"/>
 </tile>
 <tile id="6">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="color" value="red"/>
   <property name="location" value=""/>
   <property name="path" value="res://entities/enemies/slime/slime.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/redslime.png"/>
 </tile>
 <tile id="7">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="location" value=""/>
  </properties>
  <image width="16" height="16" source="images/objects/blueslime.png"/>
 </tile>
 <tile id="8">
  <properties>
   <property name="path" value="res://tiles/bombable_rock.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/bombable_rock.png"/>
 </tile>
 <tile id="9">
  <properties>
   <property name="path" value="res://tiles/cliff.tscn"/>
   <property name="spritedir" value="Down"/>
  </properties>
  <image width="16" height="16" source="images/objects/cliff.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="4" width="16" height="12"/>
  </objectgroup>
 </tile>
 <tile id="10">
  <properties>
   <property name="def" value="weapons"/>
   <property name="hidden" type="bool" value="false"/>
   <property name="item" value="Bow"/>
   <property name="location" value="room"/>
   <property name="path" value="res://tiles/chest.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/chest.png"/>
 </tile>
 <tile id="11">
  <properties>
   <property name="dialogue" value="npc"/>
   <property name="direction" value="Down"/>
   <property name="path" value="res://entities/npcs/npc.tscn"/>
   <property name="texture" value="girl"/>
  </properties>
  <image width="16" height="16" source="images/objects/npc.png"/>
 </tile>
 <tile id="12">
  <properties>
   <property name="dialogue" value="dungeon_sign"/>
   <property name="path" value="res://tiles/sign.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/sign.png"/>
 </tile>
 <tile id="13">
  <properties>
   <property name="path" value="res://tiles/decor/waterfall.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/waterfall.png"/>
 </tile>
 <tile id="14">
  <properties>
   <property name="path" value="res://tiles/decor/deep_rock.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/deep_rock.png"/>
 </tile>
 <tile id="15">
  <properties>
   <property name="path" value="res://tiles/decor/shallow_rock.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/shallow_rock.png"/>
 </tile>
 <tile id="16">
  <properties>
   <property name="path" value="res://tiles/decor/deep_waves.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/deep_waves.png"/>
 </tile>
 <tile id="17">
  <properties>
   <property name="path" value="res://tiles/decor/shallow_waves.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/shallow_waves.png"/>
 </tile>
 <tile id="18">
  <properties>
   <property name="path" value="res://tiles/decor/tree_shallow.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/shallow_tree.png"/>
 </tile>
 <tile id="19">
  <properties>
   <property name="path" value="res://tiles/decor/tree_shallow_cluster.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/shallow_tree_cluster.png"/>
 </tile>
 <tile id="20">
  <properties>
   <property name="path" value="res://tiles/decor/thorns_shallow.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/shallow_thorns.png"/>
 </tile>
 <tile id="21">
  <properties>
   <property name="path" value="res://tiles/decor/conch_shallow.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/shallow_conch.png"/>
 </tile>
 <tile id="22">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="location" value=""/>
   <property name="path" value="res://entities/enemies/smashroom/smashroom.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/smashroom.png"/>
 </tile>
 <tile id="23">
  <properties>
   <property name="path" value="res://tiles/brazier.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/brazier.png"/>
 </tile>
 <tile id="24">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="location" value=""/>
   <property name="path" value="res://entities/enemies/pirafaux/pirafaux.tscn"/>
  </properties>
  <image width="16" height="22" source="images/objects/pirafaux.png"/>
 </tile>
 <tile id="25">
  <properties>
   <property name="path" value="res://tiles/lockblock.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/keyblock.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="26">
  <properties>
   <property name="direction" value="up"/>
   <property name="path" value="res://tiles/key_door.tscn"/>
   <property name="texture" value="dungeon1"/>
  </properties>
  <image width="16" height="16" source="images/objects/key_door_up.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="27">
  <properties>
   <property name="direction" value="up"/>
   <property name="path" value="res://tiles/bombable_door.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/bombable_door.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16"/>
  </objectgroup>
 </tile>
 <tile id="28">
  <properties>
   <property name="path" value="res://tiles/blue_cannon.tscn"/>
   <property name="spritedir" value="Down"/>
  </properties>
  <image width="16" height="16" source="images/objects/blue_cannon.png"/>
 </tile>
 <tile id="29">
  <properties>
   <property name="path" value="res://tiles/cannonwall.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/cannon_wall.png"/>
 </tile>
 <tile id="30">
  <properties>
   <property name="path" value="res://tiles/gravestone.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/gravestone.png"/>
 </tile>
 <tile id="31">
  <properties>
   <property name="entrance" value=""/>
   <property name="map" value=""/>
   <property name="path" value="res://tiles/dropdown.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/dropdown.png"/>
 </tile>
 <tile id="32">
  <properties>
   <property name="color" value="blue"/>
   <property name="path" value="res://tiles/pot.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/pot.png"/>
 </tile>
 <tile id="33">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="location" value=""/>
   <property name="path" value="res://entities/enemies/knawblin/knawblin.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/knawblin.png"/>
 </tile>
 <tile id="34">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="location" value=""/>
   <property name="path" value="res://entities/enemies/bat/bat.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/bat.png"/>
 </tile>
 <tile id="35">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="location" value=""/>
   <property name="path" value="res://entities/enemies/sneaky_bush/sneaky_bush.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/sneakybush.png"/>
 </tile>
 <tile id="36">
  <properties>
   <property name="chest_spawn" type="bool" value="false"/>
   <property name="location" value=""/>
   <property name="path" value="res://entities/enemies/cucukin/cucukin.tscn"/>
  </properties>
  <image width="16" height="16" source="images/objects/cucukin.png"/>
 </tile>
</tileset>
