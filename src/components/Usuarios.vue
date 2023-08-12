<template>
   <div>
     <v-container>
          <v-row no-gutters >
            <v-col>
              <v-btn to="/articulos/crear" tyle color="#00c853">
                <v-icon left>mdi-plus</v-icon>
                Nuevo usuario
              </v-btn>
            </v-col>
            <v-col>
              <v-btn tyle color="#F3AA60" @click.stop="">
                <v-icon left>mdi-cart-outline</v-icon>
                Usuarios
              </v-btn>
            </v-col>
            <v-col>
              <v-btn tyle color="#525FE1" @click.stop="">
                <v-icon left>mdi-exit-to-app</v-icon>
                Roles
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
         <v-simple-table >
   
        <thead height="80px">
          <tr class="text-subtitle-8">
            <th class="primary--text">
              ID
            </th>
            <th class="primary--text">
              nombre
            </th>
            <th class="primary--text">
              Apellido
            </th>
            <th class="primary--text">
              Email
            </th>
            <th class="primary--text">
              Telefono
            </th>
            <th class="primary--text">
              Rol
            </th>
            <th class="primary--text">
              Status
            </th>
            <th class="primary--text">
              Imagen
            </th>
            <th class="text-right primary--text">
              Acciones
            </th>
            <th><v-btn :to="{ name: 'editar_articulo', params: {  } }" fab small color="light-blue"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn @click.stop="" @click="" fab small color="orange darken-4"><v-icon>mdi-delete</v-icon></v-btn>
            </th>
             
          </tr>
        </thead>
      </v-simple-table>
   </div>
  
</template>

