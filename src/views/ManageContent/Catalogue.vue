<template>
  <v-card class="pa-4">
    <DraggableTree class="tree" :data="treeData" draggable ref="tree" @drag="onDrag" @drop="onDrop">
      <div slot-scope="{data, store}">
        <template v-if="!data.isDragPlaceHolder">
          <v-icon v-if="data.children && data.children.length" @click="store.toggleOpen(data)">
            {{data.open ? 'arrow_drop_down' : 'arrow_right'}}
          </v-icon>
          <div class="tree-node-name flex"
               v-bind:class="{'pl-4': !(data.children && data.children.length),
               'tree-category': data._vm.level === 1,
                'tree-subject': data._vm.level === 2,
                 'tree-sub-category': data._vm.level === 3,
                  'tree-topic': data._vm.level === 4}">
            {{data.name}} - {{data.draggable}}
          </div>
          <v-icon class="right">add</v-icon>
          <v-icon class="right">edit</v-icon>
          <v-icon class="text-xs-right">delete</v-icon>
        </template>
      </div>
    </DraggableTree>
  </v-card>
</template>

<script>
import { DraggableTree } from 'vue-draggable-nested-tree'
import * as th from 'tree-helper'

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
                  hasChild: false
                },
                {
                  name: 'SUB-CATEGORY',
                  hasChild: false
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
    }, { name: 'Biology', hasChild: false }],
    maxLevel: 4
  }),
  mounted () {
    this.setTree(this.treeData)
  },
  methods: {
    setTree (treeData) {
      th.depthFirstSearch(treeData, (childNode) => {
        this.$set(childNode, 'draggable', childNode._vm.level > 2)
      })
    },
    addChild (item) {
      this.treeData[0].children.push({ text: 'child' })
    },
    deleteChild (item) {
      this.treeData[0].children.push({ text: 'child' })
    },
    onDrag (node) {
      let nodeLevels = 1
      th.depthFirstSearch(node, (childNode) => {
        if (childNode._vm.level > nodeLevels) {
          nodeLevels = childNode._vm.level
        }
      })
      nodeLevels = nodeLevels - node._vm.level + 1
      console.log(nodeLevels)
      const childNodeMaxLevel = this.maxLevel - nodeLevels

      th.depthFirstSearch(this.treeData, (childNode) => {
        this.$set(childNode, 'droppable', childNode._vm.level <= childNodeMaxLevel)
      })
    },
    onDrop (node) {
      console.log(node._vm.level)
      // this.$set(node, 'draggable', node._vm.level > 2)
    }
  }
}
</script>

<style lang="scss">
.draggable-placeholder-inner {
  border: 1px dashed #0088F8;
  box-sizing: border-box;
  background: rgba(0, 136, 249, 0.09);
  color: #0088f9;
  text-align: center;
  padding: 0;
  display: flex;
  align-items: center;
}

.tree {
  .tree-node-inner {
    border: none;
    padding: 0;
    cursor: pointer;

    & > div {
      align-items: center;
      display: flex;
    }
  }

  .tree-node-inner-back:hover {
    background: #ddd;
  }

  .tree-node-name {
    font-size: 1.2em;
  }

  .tree-category {
    color: red;
  }

  .tree-subject {
    color: blue;
  }

  .tree-sub-category {
    color: darkmagenta;
  }

  .tree-topic {
    color: seagreen;
  }
}
</style>
