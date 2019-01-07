<template>
  <DraggableTree class="tree" :data="treeData" draggable cross-tree>
    <div slot-scope="{data, store}">
      <template v-if="!data.isDragPlaceHolder">
        <v-icon v-if="data.children && data.children.length" @click="store.toggleOpen(data)">
          {{data.open ? 'arrow_drop_down' : 'arrow_right'}}
        </v-icon>
        <div class="tree-node-name flex" v-bind:class="{'pl-4': !(data.children && data.children.length)}">{{data.name}}</div>
        <v-icon class="right">add</v-icon>
        <v-icon class="right">edit</v-icon>
        <v-icon class="text-xs-right">delete</v-icon>
      </template>
    </div>
  </DraggableTree>
</template>

<script>
import { DraggableTree } from 'vue-draggable-nested-tree'

export default {
  name: 'Catalogue',
  components: { DraggableTree },
  data: () => ({
    treeData: [{
      name: 'Science',
      hasChild: true,
      children: [
        {
          name: 'Physics',
          hasChild: true,
          children: [
            {
              name: 'Linear Motion 1',
              hasChild: true,
              children: [
                {
                  name: 'motion',
                  hasChild: true,
                  children: [{ name: 'color1', hasChild: false }]
                },
                {
                  name: 'SUB-CATEGORY',
                  hasChild: true,
                  children: [{ name: 'color', hasChild: false }]
                }]
            },
            { name: 'Linear motion 2', hasChild: false },
            { name: 'Linear motion 3', hasChild: false }
          ]
        },
        { name: 'Chemistry', hasChild: false },
        { name: 'Physical Science', hasChild: false },
        { name: 'Biology', hasChild: false },
        { name: 'Anatomy', hasChild: false },
        { name: 'Physiology', hasChild: false },
        { name: 'Zoology', hasChild: false },
        { name: 'Science', hasChild: false },
        { name: 'Physics - Intermediate', hasChild: false },
        { name: 'Biology', hasChild: false }
      ]
    }]
  }),
  methods: {
    addChild (item) {
      this.treeData[0].children.push({ text: 'child' })
    },
    deleteChild (item) {
      this.treeData[0].children.push({ text: 'child' })
    }
  }
}
</script>

<style lang="scss">
.he-tree{
  border: 1px solid #ccc;
  padding: 20px;
}
.draggable-placeholder-inner{
  border: 1px dashed #0088F8;
  box-sizing: border-box;
  background: rgba(0, 136, 249, 0.09);
  color: #0088f9;
  text-align: center;
  padding: 0;
  display: flex;
  align-items: center;
}
.tree{
  .tree-node-inner{
    border: none;
    padding: 0;
    cursor: pointer;
    & > div {
      align-items: center;
      display: flex;
    }
  }
  .tree-node-inner-back:hover{
    background: #ddd;
  }

  .tree-node-name{
    font-size: 1.2em;
  }
}
</style>
